import * as graphql from 'graphql';

export const PostSchema = graphql.buildSchema(`
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

	type Post {
		id: String
		owner: User
		content: String
		comments: [Comment]
	}

	type Query {
		posts(limit: Int): [Post]
		post(id: String): Post
	}
`);