import { Routes, RouterModule } from '@angular/router';

import { FalcorComponent } from './falcor.component';

const routes: Routes = [
	{ path: '', component: FalcorComponent }
];

export const falcorRouting = RouterModule.forChild(routes);