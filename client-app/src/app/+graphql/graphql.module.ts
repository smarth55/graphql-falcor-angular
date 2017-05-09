import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { graphqlRouting } from './graphql.routes';
import { GraphqlComponent } from './graphql.component';

@NgModule({
	imports: [
		CommonModule,
		graphqlRouting
	],
	declarations: [GraphqlComponent]
})
export class GraphqlModule { }