import * as express from 'express';
import * as falcor from 'falcor-express';

import { Routes } from './routes'

export class FalcorRouter {
	static createRoutes(app: express.Application) {
		this.createRoute(app);
	}

	private static createRoute(app: express.Application) {
		app.use('/model', falcor.dataSourceRoute(() => new Routes()));
	}
}