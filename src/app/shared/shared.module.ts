import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
declarations: [],

imports: [CommonModule],
// share things from this shared module with other components
exports: [CommonModule]
})
export class SharedModule { }
