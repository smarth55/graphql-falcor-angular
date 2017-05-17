import { Component, OnInit } from '@angular/core';

import * as falcor from 'falcor';
import * as HttpDataSource from 'falcor-http-datasource';

import { environment } from '../../environments/environment';

@Component({
	selector: 'app-falcor',
	templateUrl: './falcor.component.pug',
	styleUrls: ['./falcor.component.css']
})
export class FalcorComponent implements OnInit {
	private apiBase: string = `${environment.falcorBase}/model`;
	private dataSourceOptions: any = {
		crossDomain: true,
		withCredentials: false
	};

	model: falcor.Model;
	posts: any;

	constructor() {
		this.model = new falcor.Model({
			source: new (<any>HttpDataSource)(this.apiBase, this.dataSourceOptions)
		}).batch();
	}

	ngOnInit() {
		this.model.get("postlist[0..2]['id', 'content']")
			.then(data => data.json.postlist)
			.then(posts => this.flatten(posts))
			.then(posts => {
				this.posts = posts;
			});
	}

	private flatten(obj: object) {
		return Object.keys(obj).map(key => obj[key]);
	}
}