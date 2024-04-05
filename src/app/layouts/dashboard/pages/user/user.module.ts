import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
