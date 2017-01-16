import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentsListComponent} from "../students-list/students-list.component";
import {StudentsEditComponent} from "../students-edit/students-edit.component";
import {StudentsMainComponent} from "../students-main/students-main.component";

const STUDENT_ROUTES: Routes = [
  {path: 'students-main', component: StudentsMainComponent},
  {path: 'students-add', component: StudentsEditComponent},
  {path: 'students/:id', component: StudentsEditComponent},
  {path: 'students', component: StudentsListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(STUDENT_ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class StudentsRoutingModule {
}
