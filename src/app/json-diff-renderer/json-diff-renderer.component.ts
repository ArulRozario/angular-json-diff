import { Component, OnInit } from '@angular/core';
import {
  AUTH_TOKEN,
  END_POINT,
  PATH_PREFIX,
  TENANT,
  ViewEnum,
} from '../constants';
import { jsonLeft } from '../json-db';
import { jsonRight } from '../json-bc';
import { orderById } from '../order-by-id';
import { leftJson } from './mock-data-left';
import { rightJson } from './mock-data-right';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-json-diff-renderer',
  templateUrl: './json-diff-renderer.component.html',
  styleUrls: ['./json-diff-renderer.component.css'],
})
export class JsonDiffRendererComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  jsonLeft; //= orderById(jsonLeft, jsonRight);
  jsonRight; // = orderById(jsonRight, jsonLeft);
  leftJsonFlattened = {};
  rightJsonFlattened = {};
  leftDiffProps = {};
  rightDiffProps = {};
  leftHeights = {};
  rightHeights = {};
  leftRemovedProps = {}; //TODO
  rightRemovedProps = {};
  leftNewProps = {};
  rightNewProps = {};
  viewEnum = ViewEnum;
  ngOnInit() {
    this.httpClient
      .get(END_POINT, {
        headers: {
          'lava-tenant': TENANT,
          Authorization: AUTH_TOKEN,
        },
      })
      .subscribe((res: any) => {
        this.jsonLeft = JSON.parse(res?.data.bcJson);
        this.jsonRight = JSON.parse(res?.data?.dbJson);
        this.findDiff();
      });
  }
  findDiff() {
    const { obj1, obj2 } = orderById(jsonLeft, jsonRight);
    this.jsonLeft = obj1;
    this.jsonRight = obj2;
    this.leftJsonFlattened = this.flattenJsonAndAddPathProps(this.jsonLeft);
    this.rightJsonFlattened = this.flattenJsonAndAddPathProps(this.jsonRight);
    this.leftDiffProps = this.findDiffProps(
      this.leftJsonFlattened,
      this.rightJsonFlattened
    );
    this.rightDiffProps = this.findDiffProps(
      this.rightJsonFlattened,
      this.leftJsonFlattened
    );
    this.leftRemovedProps = this.findRemovedProps(
      this.leftJsonFlattened,
      this.rightJsonFlattened
    );
    this.rightRemovedProps = this.findRemovedProps(
      this.rightJsonFlattened,
      this.leftJsonFlattened
    );
    console.log('left removed', this.leftRemovedProps);
    console.log('right removed', this.rightRemovedProps);
  }
  findRemovedProps(json1, json2) {
    return Object.keys(json1).filter((key) => {
      return key in json2 !== true;
    });
  }
  findDiffProps(json1, json2) {
    const diffProps = {};
    for (const key in json1) {
      if (json2[key] !== json1[key]) {
        diffProps[key] = {
          left: json1[key],
          right: json2[key],
        };
      }
    }
    return diffProps;
  }
  /**
   * @description flatten json into one level. Preserve paths by making keys to represent their path.
   * @param obj json to flatten
   * @param parentPath parent objects path. it's empty for the root obj.
   * @param pathsObj flattend json with keys as paths. initially empty object
   */
  flattenJsonAndAddPathProps(obj, parentPath = '', pathsObj = {}) {
    for (const key in obj) {
      // both arrays and objects.
      if (key.endsWith(PATH_PREFIX)) {
        // if it's a path key then skip. otherwise duplicate paths are added
        continue;
      }
      const currentPath = parentPath ? parentPath + '-' + key : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        obj[key + PATH_PREFIX] = currentPath;
        this.flattenJsonAndAddPathProps(obj[key], currentPath, pathsObj);
      } else {
        obj[key + PATH_PREFIX] = currentPath;
        pathsObj[currentPath] = obj[key];
      }
    }
    return pathsObj;
  }
  leftHeightChange(val) {
    this.leftHeights = val;
  }
  rightHeightChange(val) {
    this.rightHeights = val;
  }
}
