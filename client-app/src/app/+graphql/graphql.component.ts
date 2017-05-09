import { Component, OnInit } from '@angular/core';

import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
	selector: 'app-graphql',
	templateUrl: './graphql.component.pug',
	styleUrls: ['./graphql.component.css']
})
export class GraphqlComponent implements OnInit {
	posts: ApolloQueryObservable<any>;

	constructor(private apollo: Apollo) { }

	ngOnInit() {
		this.getPosts();
	}

	getPosts() {
		let query = gql`{
			posts {
				content
				owner {
					username
					avatar
				}
				comments {
					content
					owner {
						username
					}
				}
			}
		}`;

		this.posts = this.apollo.use('posts').watchQuery({query});
	}
}