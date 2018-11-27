import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ]
})
export class MaterialModule { }
