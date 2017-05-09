import * as express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import { PostSchema } from './schemas/post-schema';
import { UserSchema } from './schemas/user-schema';
import { CommentSchema } from './schemas/comment-schema';

import { PostsLoader } from './loaders/post-loader';
import { UserLoader } from './loaders/user-loader';
import { CommentLoader } from './loaders/comment-loader';

export class GraphqlRouter {
	static createRoutes(app: express.Application) {
		let graphqlRouter = new GraphqlRouter();

		graphqlRouter.createPostsRoute(app);
		graphqlRouter.createUsersRoute(app);
		graphqlRouter.createCommentsRoute(app);
	}

	private createPostsRoute(app: express.Application) {
		let root = {
			posts: ({limit}: {limit: number}, {posts}: {posts: PostsLoader}) => {
				return posts.getPosts(limit);
			},
			post: ({id}: {id: string}, {posts}: {posts: PostsLoader}) => {
				return posts.getPost(id);
			}
		};

		app.use('/posts', graphqlExpress({
			schema: PostSchema,
			rootValue: root,
			context: {
				posts: new PostsLoader(),
				users: new UserLoader(),
				comments: new CommentLoader()
			}
		}));

		app.use('/graphiqPosts', graphiqlExpress({
			endpointURL: '/posts'
		}));
	}

	private createUsersRoute(app: express.Application) {
		let root = {
			users: ({limit}: {limit: number}, {users}: {users: UserLoader}) => {
				return users.getUsers(limit);
			},
			user: ({id}: {id: string}, {users}: {users: UserLoader}) => {
				return users.getUser(id);
			}
		};

		app.use('/users', graphqlExpress({
			schema: UserSchema,
			rootValue: root,
			context: {
				posts: new PostsLoader(),
				users: new UserLoader(),
				comments: new CommentLoader()
			}
		}));

		app.use('/graphiqUsers', graphiqlExpress({
			endpointURL: '/users'
		}));
	}

	private createCommentsRoute(app: express.Application) {
		let root = {
			comments: ({limit}: {limit: number}, {comments}: {comments: CommentLoader}) => {
				return comments.getComments(limit);
			},
			comment: ({id}: {id: string}, {comments}: {comments: CommentLoader}) => {
				return comments.getComment(id);
			}
		};

		app.use('/comments', graphqlExpress({
			schema: CommentSchema,
			rootValue: root,
			context: {
				posts: new PostsLoader(),
				users: new UserLoader(),
				comments: new CommentLoader()
			}
		}));

		app.use('/graphiqComments', graphiqlExpress({
			endpointURL: '/comments'
		}));
	}
}