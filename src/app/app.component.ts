import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  json = [
    {
      color: 'red',
      value: '#f00',
    },
    {
      color: 'green',
      value: '#0f0',
    },
    {
      color: 'blue',
      value: '#00f',
    },
    {
      color: 'cyan',
      value: '#0ff',
    },
    {
      color: 'magenta',
      value: '#f0f',
    },
    {
      color: 'yellow',
      value: '#ff0',
    },
    {
      color: 'black',
      value: '#000',
    },
  ];
  json3 = {
    markers: [
      {
        name: 'Rixos The Palm Dubai',
        position: [25.1212, 55.1535],
      },
      {
        name: 'Shangri-La Hotel',
        location: [25.2084, 55.2719],
      },
      {
        name: 'Grand Hyatt',
        location: [25.2285, 55.3273],
      },
    ],
  };

  json2 = {
    name: 'lava',
    version: '0.0.0',
    license: 'MIT',
    scripts: {
      sonar: 'sonar-scanner',
      ng: 'ng',
      postinstall:
        'node ./decorate-angular-cli.js && ngcc --properties es2020 browser module main',
      start: 'nx serve',
      build: 'nx build',
      test: 'nx test',
      'build-agent:stats': 'nx build --configuration production --stats-json',
      'build-examiner:stats':
        'nx build examiner --configuration production --stats-json',
      'build-lac-admin:stats':
        'nx build lac-admin --configuration production --stats-json',
      'build-tenant-admin:stats':
        'nx build tenant --configuration production --stats-json',
      'analyze-agent':
        'npm run build-agent:stats && webpack-bundle-analyzer dist/apps/agent/stats.json',
      'analyze-examiner':
        'npm run build-examiner:stats && webpack-bundle-analyzer dist/apps/examiner/stats.json',
      'analyze-lac-admin':
        'npm run build-lac-admin:stats && webpack-bundle-analyzer dist/apps/lac-admin/stats.json',
      'analyze-tenant-admin':
        'npm run build-tenant-admin:stats && webpack-bundle-analyzer dist/apps/tenant/stats.json',
      'lint-fix':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng lint --fix',
      e2e: 'ng e2e',
      'affected:apps': 'nx affected:apps',
      'affected:libs': 'nx affected:libs',
      'affected:build': 'nx affected:build',
      'affected:e2e': 'nx affected:e2e',
      'affected:test': 'nx affected:test',
      'affected:lint': 'nx affected:lint',
      'affected:dep-graph': 'nx affected:dep-graph',
      affected: 'nx affected',
      format: 'nx format:write',
      'format:write': 'nx format:write',
      'format:check': 'nx format:check',
      update: 'ng update @nrwl/workspace',
      'workspace-schematic': 'nx workspace-schematic',
      'dep-graph': 'nx dep-graph',
      help: 'nx help',
      'set:env': 'envsubst < environment.template.js > env.js',
      'switch-env:local':
        'npm run set:env:local && for app in agent examiner lac-admin tenant; do npm run $app:local:switch-local; done',
      'switch-env:dev':
        'npm run set:env:dev && for app in agent examiner lac-admin tenant; do npm run $app:dev:switch-env; done',
      'switch-env:stage':
        'npm run set:env:stage && for app in agent examiner lac-admin tenant; do npm run $app:stage:switch-env; done',
      'switch-env:test':
        'npm run set:env:test && for app in agent examiner lac-admin tenant; do npm run $app:test:switch-env; done',
      'switch-env:demo':
        'npm run set:env:demo && for app in agent examiner lac-admin tenant; do npm run $app:demo:switch-env; done',
      'set:env:local':
        'export $(xargs < ../../deployment/environments/local.env) && npm run set:env',
      'set:env:dev':
        'export $(xargs < ../../deployment/environments/dev.env) && npm run set:env',
      'set:env:title':
        'export $(xargs < ../../deployment/environments/title.env) && npm run set:env',
      'set:env:stage':
        'export $(xargs < ../../deployment/environments/stage.env) && npm run set:env',
      'set:env:test':
        'export $(xargs < ../../deployment/environments/test.env) && npm run set:env',
      'set:env:demo':
        'export $(xargs < ../../deployment/environments/demo.env) && npm run set:env',
      'set:env:uat':
        'export $(xargs < ../../deployment/environments/uat.env) && npm run set:env',
      'agent:translate-run':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng xi18n',
      'agent:local:switch-env':
        'npm run set:env:local && cp env.js apps/agent/src/assets',
      'agent:dev:switch-env':
        'npm run set:env:dev && cp env.js apps/agent/src/assets',
      'agent:title:switch-env':
        'npm run set:env:title && cp env.js apps/agent/src/assets',
      'agent:stage:switch-env':
        'npm run set:env:stage && cp env.js apps/agent/src/assets',
      'agent:test:switch-env':
        'npm run set:env:test && cp env.js apps/agent/src/assets',
      'agent:uat:switch-env':
        'npm run set:env:uat && cp env.js apps/agent/src/assets',
      'agent:demo:switch-env':
        'npm run set:env:demo && cp env.js apps/agent/src/assets',
      'examiner:local:switch-env':
        'npm run set:env:local && cp env.js apps/examiner/src/assets',
      'examiner:dev:switch-env':
        'npm run set:env:dev && cp env.js apps/examiner/src/assets',
      'examiner:title:switch-env':
        'npm run set:env:title && cp env.js apps/examiner/src/assets',
      'examiner:stage:switch-env':
        'npm run set:env:stage && cp env.js apps/examiner/src/assets',
      'examiner:test:switch-env':
        'npm run set:env:test && cp env.js apps/examiner/src/assets',
      'examiner:demo:switch-env':
        'npm run set:env:demo && cp env.js apps/examiner/src/assets',
      'agent:local:serve':
        'npm run agent:local:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve agent --port 4400',
      'translation:sync':
        'cd ../../ && lava-translate sync-sheet-to-frontend && lava-translate sync-sheet-to-backend && cd clients/web',
      'agent:dev:serve':
        'npm run agent:dev:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve agent --port 4400',
      'agent:title:serve':
        'npm run agent:title:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve agent --port 4400',
      'agent:stage:serve':
        'npm run agent:stage:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve agent --port 4400',
      'agent:test:serve':
        'npm run agent:test:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve agent --port 4400',
      'agent:uat:serve':
        'npm run agent:uat:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve agent --port 4400',
      'agent:demo:serve':
        'npm run agent:demo:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve agent --port 4400',
      'examiner:local:serve':
        'npm run set:env:local && cp env.js apps/examiner/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve examiner --port 4500',
      'examiner:dev:serve':
        'npm run set:env:dev && cp env.js apps/examiner/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve examiner --port 4500',
      'examiner:title:serve':
        'npm run set:env:title && cp env.js apps/examiner/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve examiner --port 4500',
      'examiner:stage:serve':
        'npm run set:env:stage && cp env.js apps/examiner/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve examiner --port 4500',
      'examiner:test:serve':
        'npm run set:env:test && cp env.js apps/examiner/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve examiner --port 4500',
      'examiner:uat:serve':
        'npm run set:env:uat && cp env.js apps/examiner/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve examiner --port 4500',
      'examiner:demo:serve':
        'npm run set:env:demo && cp env.js apps/examiner/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve examiner --port 4500',
      'lac-admin:local:switch-env':
        'npm run set:env:local && cp env.js apps/lac-admin/src/assets',
      'lac-admin:dev:switch-env':
        'npm run set:env:dev && cp env.js apps/lac-admin/src/assets',
      'lac-admin:title:switch-env':
        'npm run set:env:title && cp env.js apps/lac-admin/src/assets',
      'lac-admin:stage:switch-env':
        'npm run set:env:stage && cp env.js apps/lac-admin/src/assets',
      'lac-admin:test:switch-env':
        'npm run set:env:test && cp env.js apps/lac-admin/src/assets',
      'lac-admin:demo:switch-env':
        'npm run set:env:demo && cp env.js apps/lac-admin/src/assets',
      'lac-admin:local:serve':
        'npm run set:env:local && cp env.js apps/lac-admin/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve lac-admin --port 4200 --skip-nx-cache',
      'lac-admin:dev:serve':
        'npm run set:env:dev && cp env.js apps/lac-admin/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve lac-admin --port 4200',
      'lac-admin:title:serve':
        'npm run set:env:title && cp env.js apps/lac-admin/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve lac-admin --port 4200',
      'lac-admin:stage:serve':
        'npm run set:env:stage && cp env.js apps/lac-admin/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve lac-admin --port 4200',
      'lac-admin:test:serve':
        'npm run set:env:test && cp env.js apps/lac-admin/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve lac-admin --port 4200',
      'lac-admin:demo:serve':
        'npm run set:env:demo && cp env.js apps/lac-admin/src/assets && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve lac-admin --port 4200',
      'tenant:local:switch-env':
        'npm run set:env:local && cp env.js apps/tenant/src/assets',
      'tenant:dev:switch-env':
        'npm run set:env:dev && cp env.js apps/tenant/src/assets',
      'tenant:title:switch-env':
        'npm run set:env:title && cp env.js apps/tenant/src/assets',
      'tenant:stage:switch-env':
        'npm run set:env:stage && cp env.js apps/tenant/src/assets',
      'tenant:test:switch-env':
        'npm run set:env:test && cp env.js apps/tenant/src/assets',
      'tenant:demo:switch-env':
        'npm run set:env:demo && cp env.js apps/tenant/src/assets',
      'tenant:local:serve':
        'npm run tenant:local:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve tenant --port 4300',
      'tenant:dev:serve':
        'npm run tenant:dev:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve tenant --port 4300',
      'tenant:title:serve':
        'npm run tenant:title:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve tenant --port 4300',
      'tenant:stage:serve':
        'npm run tenant:stage:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve tenant --port 4300',
      'tenant:test:serve':
        'npm run tenant:test:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve tenant --port 4300',
      'tenant:demo:serve':
        'npm run tenant:demo:switch-env && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve tenant --port 4300',
      'agent:build:en':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng build agent --configuration production',
      'agent:build': 'npm run agent:build:en',
      'examiner:build:en':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng build examiner --configuration production',
      'examiner:build': 'npm run examiner:build:en',
      'tenant-admin:build:en':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng build tenant --configuration production',
      'tenant-admin:build': 'npm run tenant-admin:build:en',
      'lac-admin:build':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng build lac-admin --configuration production --skip-nx-cache',
      'fr-workbench:dev:switch':
        'npm run set:env:dev && cp env.js apps/fr-workbench/src/assets',
      'fr-workbench:dev:serve':
        'npm run fr-workbench:dev:switch && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve fr-workbench --port 4600',
      'fr-workbench:stage:switch':
        'npm run set:env:stage && cp env.js apps/fr-workbench/src/assets',
      'fr-workbench:test:switch':
        'npm run set:env:test && cp env.js apps/fr-workbench/src/assets',
      'fr-workbench:stage:serve':
        'npm run fr-workbench:stage:switch && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve fr-workbench --port 4600',
      'fr-workbench:test:serve':
        'npm run fr-workbench:test:switch && node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng serve fr-workbench --port 4600',
      'fr-workbench:build':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng build fr-workbench --configuration production',
      'build:all':
        'ng build lava-node-utils && npm run agent:build && npm run examiner:build && npm run lac-admin:build && npm run tenant-admin:build && npm run fr-workbench:build',
      'agent:extract-i18n':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng extract-i18n agent --format=json --output-path=apps/agent/src/assets/locale --out-file=default-en.json',
      'examiner:extract-i18n':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng extract-i18n examiner --format=json --output-path=apps/examiner/src/assets/locale --out-file=default-en.json',
      'tenant:extract-i18n':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng extract-i18n tenant --format=json --output-path=apps/tenant/src/assets/locale --out-file=default-en.json',
      'lac-admin:extract-i18n':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng extract-i18n lac-admin --format=json --output-path=apps/lac-admin/src/assets/locale --out-file=default-en.json',
      'fr-workbench:extract-i18n':
        'node --max_old_space_size=9500 ./node_modules/@angular/cli/bin/ng extract-i18n fr-workbench --format=json --output-path=apps/fr-workbench/src/assets/locale --out-file=default-en.json',
      'update-libs':
        'npm i i18n@latest aequalis-ts-utils@latest ag-grid-extension@latest dependency-injection@latest  material-dialog@latest  authorization@latest',
      compodoc:
        'npx compodoc -p tsconfig.doc.json --disableSourceCode --silent',
    },
    private: true,
    dependencies: {
      '@ag-grid-community/all-modules': '27.3.0',
      '@angular-material-components/datetime-picker': '8.0.0',
      '@angular/animations': '14.0.6',
      '@angular/cdk': '14.0.5',
      '@angular/common': '14.0.6',
      '@angular/compiler': '14.0.6',
      '@angular/core': '14.0.6',
      '@angular/elements': '14.0.6',
      '@angular/flex-layout': '14.0.0-beta.40',
      '@angular/forms': '14.0.6',
      '@angular/material': '14.0.5',
      '@angular/platform-browser': '14.0.6',
      '@angular/platform-browser-dynamic': '14.0.6',
      '@angular/router': '14.0.6',
      '@asymmetrik/ngx-leaflet': '13.0.2',
      '@asymmetrik/ngx-leaflet-draw': '13.0.3',
      '@compodoc/compodoc': '1.1.19',
      '@datorama/akita': '7.1.1',
      '@geoman-io/leaflet-geoman-free': '2.13.0',
      '@nestjs/common': '8.4.6',
      '@nestjs/core': '8.4.6',
      '@nestjs/platform-express': '8.4.6',
      '@netbasal/ngx-content-loader': '3.0.0',
      '@ng-bootstrap/ng-bootstrap': '4.2.1',
      '@ngneat/cashew': '3.0.0',
      '@ngneat/until-destroy': '9.2.1',
      '@nrwl/angular': '14.4.3',
      '@tinymce/tinymce-angular': '6.0.1',
      '@turf/turf': '5.1.6',
      '@types/leaflet': '1.7.10',
      'adblock-detector': '2.0.1',
      'ag-grid-angular': '27.3.0',
      'ag-grid-community': '27.3.0',
      'amazon-quicksight-embedding-sdk': '1.19.0',
      'angular-bootstrap-md': '13.0.0',
      'angular-resizable-element': '5.0.0',
      'angular-split': '13.2.0',
      'angular2-multiselect-dropdown': '4.6.4',
      'angular2-uuid': '1.1.1',
      bootstrap: '4.5.3',
      chalk: '4.0.0',
      'chart.js': '2.9.3',
      commitizen: '4.2.4',
      'core-js': '3.22.8',
      'cron-editor': '2.1.8',
      first: '0.0.3',
      'font-awesome': '4.7.0',
      formiojs: '4.14.7',
      'full-icu': '1.4.0',
      'golden-layout': '1.5.9',
      'google-libphonenumber': '3.2.27',
      hammerjs: '2.0.8',
      install: '0.13.0',
      'intl-tel-input': '17.0.3',
      'iv-viewer': '2.0.1',
      leaflet: '1.8.0',
      'leaflet-distortableimage': '0.21.7',
      'leaflet-draw': '1.0.4',
      'leaflet-draw-locales': '1.2.1',
      'leaflet-easybutton': '2.4.0',
      'leaflet-mouse-position': '1.2.0',
      'leaflet-toolbar': '0.4.0-alpha.2',
      'leaflet.browser.print': '1.0.6',
      'leaflet.polylinemeasure': '3.0.0',
      'libphonenumber-js': '1.10.6',
      luxon: '2.4.0',
      mammoth: '1.4.21',
      'material-design-icons': '3.0.1',
      mathjs: '10.6.1',
      mdbootstrap: '4.10.1',
      'ng-inline-svg': '11.0.1',
      'ng-otp-input': '1.8.5',
      'ng-select2': '1.2.2',
      'ng2-charts': '2.3.3',
      'ng2-currency-mask': '13.0.3',
      'ng2-tooltip-directive': '2.10.3',
      'ngx-avatar': '4.1.0',
      'ngx-bootstrap': '8.0.0',
      'ngx-currency': '2.5.3',
      'ngx-daterangepicker-material': '2.4.1',
      'ngx-golden-layout': '0.0.39',
      'ngx-image-cropper': '6.1.0',
      'ngx-infinite-scroller': '0.6.3',
      'ngx-intl-tel-input': '3.2.0',
      'ngx-mask': '14.0.3',
      'ngx-material-file-input': '4.0.0',
      'ngx-print': '1.2.1',
      'ngx-virtual-scroller': '4.0.3',
      'node-html-parser': '3.3.6',
      npm: '6.14.8',
      'reflect-metadata': '0.1.13',
      rxjs: '6.6.3',
      sass: '1.29.0',
      select2: '4.0.13',
      tinymce: '6.0.3',
      tslib: '2.0.0',
      uninstall: '0.0.0',
      'web-animations-js': '2.3.2',
      xlsx: '0.18.5',
      'zone.js': '~0.11.5',
    },
    devDependencies: {
      '@angular-devkit/build-angular': '14.0.6',
      '@angular-devkit/core': '14.0.6',
      '@angular-eslint/eslint-plugin': '14.0.2',
      '@angular-eslint/eslint-plugin-template': '14.0.2',
      '@angular-eslint/template-parser': '14.0.2',
      '@angular/cli': '~14.0.0',
      '@angular/compiler-cli': '14.0.6',
      '@angular/language-service': '14.0.6',
      '@angular/localize': '14.0.6',
      '@babel/compat-data': '7.17.10',
      '@datorama/akita-ng-router-store': '7.0.0',
      '@datorama/akita-ngdevtools': '7.0.0',
      '@nestjs/schematics': '8.0.11',
      '@nestjs/testing': '8.4.6',
      '@nrwl/cli': '14.4.3',
      '@nrwl/cypress': '14.4.3',
      '@nrwl/eslint-plugin-nx': '14.4.3',
      '@nrwl/jest': '14.4.3',
      '@nrwl/linter': '14.4.3',
      '@nrwl/nest': '14.4.3',
      '@nrwl/node': '14.4.3',
      '@nrwl/storybook': '14.4.3',
      '@nrwl/workspace': '14.4.3',
      '@storybook/addon-essentials': '6.5.9',
      '@storybook/angular': '6.5.9',
      '@storybook/builder-webpack5': '6.5.9',
      '@storybook/core-server': '6.5.9',
      '@storybook/manager-webpack5': '6.5.9',
      '@types/jasmine': '4.0.3',
      '@types/jasminewd2': '2.0.10',
      '@types/jest': '27.4.1',
      '@types/jquery': '3.5.14',
      '@types/leaflet-draw': '1.0.5',
      '@types/luxon': '^3.0.1',
      '@types/node': '16.11.7',
      '@typescript-eslint/eslint-plugin': '5.30.6',
      '@typescript-eslint/parser': '5.30.6',
      codelyzer: '6.0.2',
      cypress: '9.1.0',
      'cz-conventional-changelog': '3.3.0',
      eslint: '8.15.0',
      'eslint-config-prettier': '8.1.0',
      'eslint-plugin-cypress': '2.10.3',
      'jasmine-core': '4.1.1',
      'jasmine-spec-reporter': '7.0.0',
      jest: '27.5.1',
      'jest-preset-angular': '11.1.2',
      jquery: '3.6.0',
      karma: '6.3.20',
      'karma-chrome-launcher': '3.1.1',
      'karma-coverage-istanbul-reporter': '3.0.3',
      'karma-jasmine': '5.0.1',
      'karma-jasmine-html-reporter': '2.0.0',
      'ng-packagr': '14.0.3',
      nx: '14.4.3',
      prettier: '2.7.1',
      protractor: '7.0.0',
      'ts-jest': '27.1.4',
      'ts-node': '10.8.2',
      typescript: '4.7.4',
      webpack: '5.64.0',
      'webpack-bundle-analyzer': '4.5.0',
    },
  };
}
