import { join } from 'path';
import * as Dataloader from 'dataloader';

import { UserLoader } from './user-loader';
import { CommentLoader } from './comment-loader';
import { getData } from '../../shared/utils';

export class Post {
	id: string;
	ownerId: string;
	content: string;
	commentIds: string[];

	constructor(post: any) {
		this.id = post.id;
		this.ownerId = post.owner;
		this.content = post.content;
		this.commentIds = post.comments;
	}

	owner(_: any, {users}: {users: UserLoader}) {
		return users.getUser(this.ownerId);
	}

	comments(_: any, {comments}: {comments: CommentLoader}) {
		return this.commentIds.map(id => comments.getComment(id));
	}
}

export class PostsLoader {
	posts: any[];
	loader: Dataloader<string, string[]>;

	private filename: string = 'posts.json';

	constructor() {
		this.posts = getData(join(__dirname, '..', '..', 'shared', 'data', this.filename));
		this.loader = new Dataloader(ids => Promise.all(ids.map(this.getPostById.bind(this))))
	}

	private getPostById(id: string): Post {
		return new Post(this.posts.find(post => post.id === id));
	}

	getPosts(limit?: number) {
		let list = this.posts.slice(0, limit);
		return list.map(post => this.loader.load(post.id));
	}

	getPost(id: string) {
		return this.loader.load(id);
	}

	getPostsForId(id: string, limit?: number) {
		let list = this.posts.filter(post => post.owner === id).slice(0, limit);
		return list.map(post => this.loader.load(post.id));
	}
}