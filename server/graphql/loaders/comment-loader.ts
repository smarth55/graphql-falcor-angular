import { join } from 'path';
import * as Dataloader from 'dataloader';

import { UserLoader } from './user-loader';
import { getData } from '../../shared/utils';

export class Comment {
	id: string;
	ownerId: string;
	content: string;

	constructor(post: any) {
		this.id = post.id;
		this.ownerId = post.owner;
		this.content = post.content;
	}

	owner(_: any, {users}: {users: UserLoader}) {
		return users.getUser(this.ownerId);
	}
}

export class CommentLoader {
	comments: any[];
	loader: Dataloader<string, string[]>;

	private filename: string = 'comments.json';

	constructor() {
		this.comments = getData(join(__dirname, '..', '..', 'shared', 'data', this.filename));
		this.loader = new Dataloader(ids => Promise.all(ids.map(this.getCommentById.bind(this))))
	}

	private getCommentById(id: string): Comment {
		return new Comment(this.comments.find(comment => comment.id === id));
	}

	getComments(limit?: number) {
		let list = this.comments.slice(0, limit);
		return list.map(comment => this.loader.load(comment.id));
	}

	getComment(id: string) {
		return this.loader.load(id);
	}
}