import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule
    ]
})
export class MaterialModule { }
