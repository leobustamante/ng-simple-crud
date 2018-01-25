import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './customer/edit/edit.component';
import { ListComponent } from './customer/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'edit', component: EditComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}