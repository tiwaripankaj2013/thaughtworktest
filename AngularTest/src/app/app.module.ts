import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';


import {APPROUTE} from './app-routing.configure';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    StudentComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    APPROUTE

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
