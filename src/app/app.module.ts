import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { User7Component } from './user7/user7.component';
import { Users8Component } from './users8/users8.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    User7Component,
    Users8Component,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
