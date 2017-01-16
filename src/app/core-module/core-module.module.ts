import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModuleComponent } from './core-module.component';
import { AuthService } from './auth-service.service'
import {HttpRestService} from "./http-rest.service";
import {StudentFactoryService} from "./student-factory.service";
import {Student} from "./student";

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[HttpRestService, StudentFactoryService],
  declarations: [CoreModuleComponent]
})
export class CoreModule { }
