import * as express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import { PostsLoader } from './loaders/post-loader';
import { UserLoader } from './loaders/user-loader';
import { CommentLoader } from './loaders/comment-loader';
import { Schema } from './schema';

export class GraphqlRouter {
	static createRoutes(app: express.Application) {
		let graphqlRouter = new GraphqlRouter();

		graphqlRouter.createRoute(app);
	}

	private createRoute(app: express.Application) {
		let root = {
			posts: ({limit}: {limit: number}, {posts}: {posts: PostsLoader}) => {
				return posts.getPosts(limit);
			},
			post: ({id}: {id: string}, {posts}: {posts: PostsLoader}) => {
				return posts.getPost(id);
			},
			comments: ({ limit }: { limit: number }, { comments }: { comments: CommentLoader }) => {
				return comments.getComments(limit);
			},
			comment: ({id}: {id: string}, {comments}: {comments: CommentLoader}) => {
				return comments.getComment(id);
			},
			users: ({limit}: {limit: number}, {users}: {users: UserLoader}) => {
				return users.getUsers(limit);
			},
			user: ({id}: {id: string}, {users}: {users: UserLoader}) => {
				return users.getUser(id);
			}
		};

		app.use('/graphql', graphqlExpress({
			schema: Schema,
			rootValue: root,
			context: {
				posts: new PostsLoader(),
				users: new UserLoader(),
				comments: new CommentLoader()
			}
		}));

		app.use('/graphiq', graphiqlExpress({
			endpointURL: '/graphql'
		}));
	}
}