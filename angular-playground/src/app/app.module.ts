import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
