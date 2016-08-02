/* tslint:disable */

import {enableProdMode} from '@angular/core';
if ('production' === ENV) {
	enableProdMode();
}

import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app';

require('../favicon.ico');

bootstrap(AppComponent, [HTTP_PROVIDERS, disableDeprecatedForms(), provideForms()])
		.catch(err => console.error(err));
