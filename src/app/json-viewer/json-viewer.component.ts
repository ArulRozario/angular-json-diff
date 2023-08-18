import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { LEFT_SUFFIX, PATH_PREFIX, RIGHT_SUFFIX, ViewEnum } from '../constants';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonViewerComponent {
  @Input() view: ViewEnum = ViewEnum.LEFT;
  numbers = [];
  private _lineNumber = 0;
  pathPrefix = PATH_PREFIX;
  lineNumber() {
    this._lineNumber++;
    return this._lineNumber;
  }
  valueType = ValueType;
  @Input() diffProps = {};
  @Input() child = false;
  @Input() lastChild = false;
  @Input() firstChild = false;
  @Input() arrayItem = false;
  @Input() set heights(val: { [key: string]: number }) {
    if (!val) return;
    const keys = Object.keys(val);
    if (!keys.length) return;
    const ids = keys
      .map((key) => {
        if (this.view === ViewEnum.LEFT) {
          return key.replace(/_right/g, LEFT_SUFFIX);
        }
        return key.replace(/_left/g, RIGHT_SUFFIX);
      })
      .map((id) => `#${id}`)
      .join(', ');
    const elements = <NodeListOf<HTMLElement>>document.querySelectorAll(ids);
    elements.forEach((element) => {
      const getId = () => {
        if (this.view === 'left') {
          return element.id.replace(/_left/g, RIGHT_SUFFIX);
        }
        return element.id.replace(/_right/g, LEFT_SUFFIX);
      };
      if (val[getId()] <= element.offsetHeight) return;
      element.style.height = val[getId()] + 'px';
    });
  }
  private _json: unknown;
  @Input() set json(obj: unknown) {
    this._json = obj;
    if (this.isArray(obj)) {
      this.keys = [];
      return;
    }
    this.keys = Object.keys(obj) || [];
  }
  get json() {
    return this._json;
  }
  keys: string[] = [];

  @ViewChild('contentContainer') jsonElement: ElementRef<HTMLDivElement>;
  @ViewChild('lineNumbers') lineNumbers: ElementRef<HTMLDivElement>;

  @Output() offsetHeightChange: EventEmitter<{ [key: string]: number }> =
    new EventEmitter();

  isObject(obj: unknown) {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
  }
  toOptions(options: {
    json: any;
    child: boolean;
    lastChild: boolean;
    firstChild: boolean;
    arrayItem: boolean;
    objectKeys: string[];
    parentPath: string;
  }) {
    return options;
  }
  getKeys(obj) {
    if (this.isArray(obj)) return [];
    try {
      return Object.keys(obj)?.filter((key) => !key.endsWith(PATH_PREFIX));
    } catch {
      return [];
    }
  }
  isEmptyObject(obj: unknown) {
    return this.isObject(obj) && Object.keys(obj).length === 0;
  }
  isEmptyArray(obj: unknown) {
    return this.isArray(obj) && (obj as unknown[]).length === 0;
  }
  isArray(obj: unknown) {
    return obj && Array.isArray(obj);
  }
  isObjectArray(obj: unknown) {
    return (
      this.isArray(obj) &&
      (obj as unknown[]).every((item) => this.isObject(item))
    );
  }
  isPrimitiveArray(obj: unknown) {
    return (
      obj &&
      typeof obj === 'object' &&
      Array.isArray(obj) &&
      obj.every((item) => typeof item !== 'object')
    );
  }
  @HostListener('window:resize')
  resize() {
    this._lineNumber = 0;
    this.updateLineNumbers();
  }
  ngAfterViewInit() {
    this.updateLineNumbers();
  }
  updateLineNumbers() {
    const elementHeight = this.jsonElement.nativeElement.offsetHeight;
    const numberOfLines = Math.round(elementHeight / 15);
    this.numbers = Array.from({ length: numberOfLines }, (_, i) => i + 1);
    this.resetHeights();
  }
  logChange(event) {
    this.updateLineNumbers();
  }
  resetHeights() {
    const ids = Object.keys(this.diffProps)
      .map((id) => `#${id}_${this.view}`)
      .join(', ');
    const elements = <NodeListOf<HTMLElement>>document.querySelectorAll(ids);
    const offsetHeights = {};
    elements.forEach((element) => {
      element.classList.add('changed');
      element.style.height = 'fit-content';
      offsetHeights[element.id] = element.scrollHeight;
    });
    setTimeout(() => {
      this.offsetHeightChange.emit(offsetHeights);
    });
  }
  getValueType(val: unknown) {
    if (this.isObject(val)) return ValueType.Object;
    if (this.isEmptyArray(val)) return ValueType.EmptyArray;
    if (this.isObjectArray(val)) return ValueType.ObjectArray;
    if (this.isPrimitiveArray(val)) return ValueType.PrimitiveArray;
    if (!val) return ValueType.Null;
    return ValueType.Primitive;
  }
}
enum ValueType {
  Object = 'object',
  EmptyObject = 'empty-object',
  EmptyArray = 'empty-array',
  ObjectArray = 'object-array',
  PrimitiveArray = 'primitive-array',
  Primitive = 'primitive',
  Null = 'null',
}
