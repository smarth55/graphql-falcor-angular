import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { MaterialModule } from './material.module';

import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule,
		routing
	],
	providers: [appRoutingProviders],
	bootstrap: [AppComponent]
})
export class AppModule { }