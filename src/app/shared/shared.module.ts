import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './../app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
