import * as graphql from 'graphql';

export const UserSchema = graphql.buildSchema(`
	type Comment {
		id: String
		owner: User
		content: String
	}

	type Post {
		id: String
		owner: User
		content: String
		comments: [Comment]
	}

	type User {
		id: String
		firstName: String
		lastName: String
		username: String
		email: String
		avatar: String
		friends: [User]
		posts(limit: Int): [Post]
	}

	type Query {
		users(limit: Int): [User]
		user(id: String): User
	}
`);