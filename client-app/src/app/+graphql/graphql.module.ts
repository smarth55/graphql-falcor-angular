import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import { ApolloModule, SelectPipe } from 'apollo-angular';
import { environment } from '../../environments/environment';

import { graphqlRouting } from './graphql.routes';
import { GraphqlComponent } from './graphql.component';

const userClient = new ApolloClient({
	networkInterface: createBatchingNetworkInterface({
		uri: `${environment.graphqlBase}/users`,
		batchInterval: 10
	}),
	queryDeduplication: true
});

const postClient = new ApolloClient({
	networkInterface: createBatchingNetworkInterface({
		uri: `${environment.graphqlBase}/posts`,
		batchInterval: 10
	}),
	queryDeduplication: true
});

const commentClient = new ApolloClient({
	networkInterface: createBatchingNetworkInterface({
		uri: `${environment.graphqlBase}/comments`,
		batchInterval: 10
	}),
	queryDeduplication: true
});

export function provideClient() {
	return {
		users: userClient,
		posts: postClient,
		comments: commentClient
	};
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