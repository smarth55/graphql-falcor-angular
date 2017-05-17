import { join } from 'path';

import { getData } from '../../shared/utils';

export interface Comment {
	id: string;
	ownerId: string;
	content: string;
}

export class CommentService {
	comments: Comment[];
	private fileName: string = 'comments.json';

	constructor() {
		this.comments = getData(join(__dirname, '..', '..', 'shared', 'data', this.fileName));
	}

	getCommentsByIds(ids: string[]): Promise<Comment[]> {
		return Promise.resolve(this.comments.filter(comment => ids.indexOf(comment.id) !== -1));
	}

	getComment(id: string): Promise<Comment> {
		return Promise.resolve(this.comments.find(comment => comment.id === id));
	}
}