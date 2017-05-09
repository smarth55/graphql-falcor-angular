import { NgModule } from '@angular/core';

import {
	MdToolbarModule,
	MdIconModule,
	MdSidenavModule,
	MdButtonModule,
	MdListModule,
	MdCardModule
} from '@angular/material';

@NgModule({
	imports: [
		MdToolbarModule,
		MdIconModule,
		MdSidenavModule,
		MdButtonModule,
		MdListModule,
		MdCardModule
	],
	exports: [
		MdToolbarModule,
		MdIconModule,
		MdSidenavModule,
		MdButtonModule,
		MdListModule,
		MdCardModule
	]
})
export class MaterialModule {}