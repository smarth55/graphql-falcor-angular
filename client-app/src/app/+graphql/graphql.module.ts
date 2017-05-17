import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { graphqlRouting } from './graphql.routes';
import { GraphqlComponent } from './graphql.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		graphqlRouting
	],
	declarations: [GraphqlComponent]
})
export class GraphqlModule { }