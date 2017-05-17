import * as router from 'falcor-router';
import { ref, atom } from 'falcor-json-graph';

import { UserService } from '../services/users';
import { PostService } from '../services/posts';
import { CommentService } from '../services/comments';

const Users = new UserService();
const Posts = new PostService();
const Comments = new CommentService();

const routes: router.RouteDefinition[] = [
	{
		route: "postlist[{integers:indices}]",
		get: (pathset) => {
			return Posts.getAllPosts().then(posts => {
				let results: any[] = [];
				
				(<any>pathset).indices.forEach((index: number) => {
					let post: any = posts[index];

					if ( !post ) {
						results.push({
							path: ['postlist', index],
							value: post
						});
					} else {
						results.push({
							path: ['postlist', index],
							value: ref(['posts', post.id])
						});
					}
				});

				return results;
			});
		}
	},
	{
		route: "posts[{keys:postIds}][{keys:props}]",
		get: (pathset) => {
			return Posts.getPostsByIds((<any>pathset).postIds).then(posts => {
				let results: any[] = [];

				posts.forEach((post: any) => {
					(<any>pathset).props.forEach((prop: string) => {
						results.push({
							path: ['posts', post.id, prop],
							value: post[prop]
						})
					});
				});

				return results;
			});
		}
	},
	{
		route: "posts[{keys:postIds}].owner",
		get: (pathset) => {
			return Posts.getPostsByIds((<any>pathset).postIds).then(posts => {
				let results: any = [];

				posts.forEach((post: any) => {
					results.push({
						path: ['posts', post.id, 'owner'],
						value: ref(['users', post.owner])
					});
				});

				return results;
			});
		}
	},
	// {
	// 	route: "userlist[{integers:indices}]",
	// 	get: (pathset) => {
	// 		return Users.getAllUsers().then(users => {
	// 			let results: any = [];

	// 			(<any>pathset).indices.forEach((index: number) => {
	// 				let user: any = users[index];

	// 				if (!user) {
	// 					results.push({
	// 						path: ['userlist', index],
	// 						value: user
	// 					});
	// 				} else {
	// 					results.push({
	// 						path: ['userlist', index],
	// 						value: ref(['users', user.id])
	// 					})
	// 				}
	// 			});

	// 			return results;
	// 		});
	// 	}
	// },
	{
		route: "users[{keys:userIds}][{keys:props}]",
		get: (pathset) => {
			return Users.getUsersByIds((<any>pathset).userIds)
				.then(users => {
					let results: any[] = [];

					users.forEach((user: any) => {
						(<any>pathset).props.forEach((prop: string) => {
							results.push({
								path: ['users', user.id, prop],
								value: user[prop]
							})
						});
					});

					return results;
				});
		}
	}
];

export class Routes extends router.createClass(routes) {
	constructor() {
		super();
	}
}