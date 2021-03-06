import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
		path: '',
		component: ListComponent
  },
  {
		path: 'detail/:id',
		component: DetailComponent
  },
  {
		path: 'create',
		component: CreateComponent
  },
  {
	  path: '**',
	  redirectTo: ''
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandRoutingModule { }
