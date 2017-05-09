import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'falcor', loadChildren: 'app/+falcor/falcor.module#FalcorModule' },
	{ path: 'graphql', loadChildren: 'app/+graphql/graphql.module#GraphqlModule' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);