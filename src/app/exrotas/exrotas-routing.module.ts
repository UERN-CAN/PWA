import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoComponentComponent } from '../novo-component/novo-component.component';
import { Component2Component } from '../component2/component2.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: NovoComponentComponent },
  { path: 'novo-component', component: NovoComponentComponent },
  { path: 'component2', component: Component2Component, data: { nome: 'nome passado por parametro' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EXRotasRoutingModule { }
