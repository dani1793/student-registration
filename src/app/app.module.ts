import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {APP_ROUTES_PROVIDERS} from "./app.routes";
import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core-module.module';
import {StudentsModule} from "./students/students.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    StudentsModule,
    RouterModule.forRoot(APP_ROUTES_PROVIDERS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
