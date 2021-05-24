import { NgModule } from '@angular/core';
import { CustomListSvComponent } from './custom-list-sv.component';
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    CustomListSvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule
  ],
  exports: [
    CustomListSvComponent
  ]
})
export class CustomListSvModule { }
