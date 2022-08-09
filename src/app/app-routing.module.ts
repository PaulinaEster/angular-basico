import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { ListHerosComponent } from './components/list-heros/list-heros.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';


const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'form', component: TwoWayBindingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'parent-data', component: ParentDataComponent },
  { path: 'emiter', component: EmiterComponent },
  { path: 'list-heros', component: ListHerosComponent },
  { path: 'list/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
