import { NgModule } from '@angular/core';

import {
	MdToolbarModule,
	MdIconModule,
	MdSidenavModule,
	MdButtonModule,
	MdListModule
} from '@angular/material';

@NgModule({
	imports: [
		MdToolbarModule,
		MdIconModule,
		MdSidenavModule,
		MdButtonModule,
		MdListModule
	],
	exports: [
		MdToolbarModule,
		MdIconModule,
		MdSidenavModule,
		MdButtonModule,
		MdListModule
	]
})
export class MaterialModule {}