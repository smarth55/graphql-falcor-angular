import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { falcorRouting } from './falcor.routes';
import { FalcorComponent } from './falcor.component';

@NgModule({
	imports: [
		CommonModule,
		falcorRouting
	],
	declarations: [FalcorComponent]
})
export class FalcorModule { }