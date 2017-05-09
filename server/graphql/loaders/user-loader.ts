import { join } from 'path';
import * as Dataloader from 'dataloader';

import { PostsLoader } from './post-loader';
import { getData } from '../../shared/utils';

export class User {
	id: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	avatar: string;
	friendIds: string[];

	constructor(user: any) {
		this.id = user.id;
		this.firstName = user.firstName;
		this.lastName = user.lastName;
		this.username = user.username;
		this.email = user.email;
		this.avatar = user.avatar;
		this.friendIds = user.friends;
	}

	friends(_: any, {users}: {users: UserLoader}) {
		return this.friendIds.map(id => users.getUser(id));
	}

	posts({limit}: {limit: number}, {posts}: {posts: PostsLoader}) {
		return posts.getPostsForId(this.id, limit);
	}
}

export class UserLoader {
	users: any[];
	loader: Dataloader<string, string[]>;

	private filename: string = 'users.json';

	constructor() {
		this.users = getData(join(__dirname, '..', '..', 'shared', 'data', this.filename));
		this.loader = new Dataloader(ids => Promise.all(ids.map(this.getUserById.bind(this))))
	}

	private getUserById(id: string): User {
		return new User(this.users.find(user => user.id === id));
	}

	getUsers(limit?: number) {
		let list = this.users.slice(0, limit);
		return list.map(user => this.loader.load(user.id));
	}

	getUser(id: string) {
		return this.loader.load(id);
	}
}