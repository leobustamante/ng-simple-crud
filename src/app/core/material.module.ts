import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';

import 'hammerjs';

const MATERIAL_MODULES = [
    MatSidenavModule,
    MatToolbarModule
];

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})
export class MaterialModule {}
