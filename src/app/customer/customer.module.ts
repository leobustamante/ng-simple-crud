import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatTableModule, MatInputModule } from '@angular/material';

import { CustomerService } from '../providers/services/customer.service';

import { MaterialModule } from '../shared/material.module';

import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    EditComponent, 
    ListComponent
   ],providers: [ 
     CustomerService
  ]
})
export class CustomerModule { }
