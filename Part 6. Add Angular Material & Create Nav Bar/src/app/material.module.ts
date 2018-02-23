import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatInputModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatToolbarModule
    ]
})
export class MaterialModule { }
