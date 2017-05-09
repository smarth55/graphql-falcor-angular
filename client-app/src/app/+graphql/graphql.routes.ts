import { Routes, RouterModule } from '@angular/router';

import { GraphqlComponent } from './graphql.component';

const routes: Routes = [
	{ path: '', component: GraphqlComponent }
];

export const graphqlRouting = RouterModule.forChild(routes);