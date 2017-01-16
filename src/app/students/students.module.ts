import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsDetailComponent } from './students-detail/students-detail.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { StudentsMainComponent } from './students-main/students-main.component';
import {StudentsRoutingModule} from "./students-routing/students-routing.module";
import {FormsModule} from "@angular/forms";
import { RegNoValidateDirective } from './reg-no-validate.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StudentsRoutingModule,
    FormsModule
  ],
  exports:[HeaderComponent, StudentsMainComponent,StudentsListComponent,StudentsEditComponent],
  declarations: [StudentsListComponent, StudentsDetailComponent, StudentsEditComponent, HeaderComponent, StudentsMainComponent, RegNoValidateDirective]
})
export class StudentsModule { }
