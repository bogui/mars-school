import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubComponent } from './add-sub/add-sub.component';
import { SimpleChecsComponent } from './simple-checs/simple-checs.component';

const routes: Routes = [
  {
    path: 'simple',
    component: SimpleChecsComponent,
  },
  { path: 'add-sub', component: AddSubComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
