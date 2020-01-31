import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { User07Component } from './user07/user07.component';
import { User15Component } from './user15/user15.component';
import { User09Component } from './user09/user09.component';
import { Users08Component } from './users08/users08.component';
import { Users09Component } from './users09/users09.component';
import { Users15Component } from './users15/users15.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    User07Component,
    User09Component,
    Users08Component,
    Users09Component,
    Users15Component,
    User15Component,
    AddItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
