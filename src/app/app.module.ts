import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { User07Component } from './user07/user07.component';
import { User9Component } from './user9/user9.component';
import { Users8Component } from './users8/users8.component';
import { Users9Component } from './users9/users9.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    User07Component,
    User9Component,
    Users8Component,
    Users9Component,
    UserComponent,
    UsersComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
