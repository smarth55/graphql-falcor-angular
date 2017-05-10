import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import { ApolloModule, SelectPipe } from 'apollo-angular';
import { environment } from '../../environments/environment';

import { graphqlRouting } from './graphql.routes';
import { GraphqlComponent } from './graphql.component';

const apolloClient = new ApolloClient({
	networkInterface: createBatchingNetworkInterface({
		uri: `${environment.graphqlBase}/graphql`,
		batchInterval: 10
	}),
	queryDeduplication: true
});

export function provideClient() {
	return apolloClient;
}

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		ApolloModule.forRoot(provideClient),
		graphqlRouting
	],
	providers: [SelectPipe],
	declarations: [GraphqlComponent]
})
export class GraphqlModule { }