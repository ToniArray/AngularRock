import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BandRoutingModule } from './band-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    BandRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BandModule { }
