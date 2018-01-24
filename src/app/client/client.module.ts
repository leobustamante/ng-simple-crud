import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatTableModule } from '@angular/material';

import { AppService } from '../providers/app.service';

import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';



@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule 
  ],
  declarations: [
    EditComponent, 
    ListComponent
   ],providers: [
  ]
})
export class ClientModule { }
