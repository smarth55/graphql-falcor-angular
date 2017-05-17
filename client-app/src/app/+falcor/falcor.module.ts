import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { falcorRouting } from './falcor.routes';
import { FalcorComponent } from './falcor.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		falcorRouting
	],
	declarations: [FalcorComponent]
})
export class FalcorModule { }