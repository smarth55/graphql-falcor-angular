import * as graphql from 'graphql';

export const CommentSchema = graphql.buildSchema(`
	type User {
		id: String
		firstName: String
		lastName: String
		username: String
		email: String
		avatar: String
		friends: [User]
	}

	type Comment {
		id: String
		owner: User
		content: String
	}

	type Query {
		comments(limit: Int): [Comment]
		comment(id: String): Comment
	}
`);