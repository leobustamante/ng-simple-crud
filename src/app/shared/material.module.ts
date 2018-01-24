import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    //MatTableDataSource
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';

import 'hammerjs';

const MATERIAL_MODULES = [
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    //MatTableDataSource
];

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})
export class MaterialModule {}
