import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { User07Component } from './user07/user07.component';
import { User09Component } from './user09/user09.component';
import { User15Component } from './user15/user15.component';
import { User17Component } from './user17/user17.component';
import { Users08Component } from './users08/users08.component';
import { Users09Component } from './users09/users09.component';
import { Users15Component } from './users15/users15.component';
import { Users17Component } from './users17/users17.component';
import { Users25Component } from './users25/users25.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRFormComponent } from './user-rform/user-rform.component';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';
import { Routing3Component } from './routing3/routing3.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    User07Component,
    User15Component,
    User17Component,
    User09Component,
    Users08Component,
    Users09Component,
    Users15Component,
    Users17Component,
    Users25Component,
    AddItemComponent,
    UserFormComponent,
    UserRFormComponent,
    Routing1Component,
    Routing2Component,
    Routing3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
