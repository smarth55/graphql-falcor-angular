import { join } from 'path';

import { getData } from '../../shared/utils';

export interface Post {
	id: string;
	ownerId: string;
	content: string;
	// commentIds: string[];
}

export class PostService {
	posts: Post[];
	private fileName: string = 'posts.json';

	constructor() {
		this.posts = getData(join(__dirname, '..', '..', 'shared', 'data', this.fileName));
	}

	getAllPosts(limit?: number): Promise<Post[]> {
		return Promise.resolve(this.posts.slice(0, limit));
	}

	getPostsByIds(ids: string[]): Promise<Post[]> {
		return Promise.resolve(this.posts.filter(post => ids.indexOf(post.id) !== -1));
	}

	getPost(id: string): Promise<Post> {
		return Promise.resolve(this.posts.find(post => post.id === id));
	}
}