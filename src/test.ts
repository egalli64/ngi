// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
// const context = require.context('./', true, /\.spec\.ts$/);

// Alternative: just a single component (...)
// const context = require.context('./', true, /my-http\.component\.spec\.ts$/);

// Alternative: just a single service (...)
const context = require.context('./', true, /coder\.service\.spec\.ts$/);


// And load the modules.
context.keys().map(context);
