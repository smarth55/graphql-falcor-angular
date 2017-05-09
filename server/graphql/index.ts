import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';

import { GraphqlRouter } from './routes';

export class GraphqlServer {
	app: express.Application;

	constructor() {
		this.app = express();

		this.config();
		this.createRoutes();
	}

	private config() {
		this.app.use(compression());
		this.app.use(helmet());
		this.app.use(cors());
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({extended: true}));
	}

	private createRoutes() {
		GraphqlRouter.createRoutes(this.app);
	}
}