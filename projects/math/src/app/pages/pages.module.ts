import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SimpleChecsComponent } from './simple-checs/simple-checs.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AddSubComponent } from './add-sub/add-sub.component';

@NgModule({
  declarations: [SimpleChecsComponent, AddSubComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
})
export class PagesModule {}
