import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

@Component({
	selector: 'app-graphql',
	templateUrl: './graphql.component.pug',
	styleUrls: ['./graphql.component.css']
})
export class GraphqlComponent implements OnInit {
	posts: any;

	constructor(private http: Http) {}

	ngOnInit() {
		this.getPosts();
	}

	getPosts() {
		let query = `{
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

		this.http.get(`${environment.graphqlBase}/graphql`, {params: {query}}).subscribe(data => {
			this.posts = data.json().data.posts;
		});
	}
}