import { join } from 'path';

import { getData } from '../../shared/utils';

export interface User {
	id: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	avatar: string;
	// friendIds: string[];
}

export class UserService {
	users: User[];
	private fileName: string = 'users.json';

	constructor() {
		this.users = getData(join(__dirname, '..', '..', 'shared', 'data', this.fileName));
	}

	getAllUsers(limit?: number): Promise<User[]> {
		return Promise.resolve(this.users.slice(0, limit));
	}

	getUsersByIds(ids: string[]): Promise<User[]> {
		return Promise.resolve(this.users.filter(user => ids.indexOf(user.id) !== -1));
	}

	getUser(id: string): Promise<User> {
		return Promise.resolve(this.users.find(user => user.id === id));
	}
}