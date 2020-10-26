import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import { Users27Component } from './users27/users27.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRFormComponent } from './user-rform/user-rform.component';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';
import { Routing3Component } from './routing3/routing3.component';
import { MyHttpComponent } from './my-http/my-http.component';
import { CoderGetAllComponent } from './coder-get-all/coder-get-all.component';
import { CoderSaveComponent } from './coder-save/coder-save.component';
import { PipExComponent } from './pip-ex/pip-ex.component';
import { MyPipe } from './my.pipe';
import { SimpleComponent } from './simple/simple.component';
import { DirStrutComponent } from './dir-strut/dir-strut.component';
import { DirAttrComponent } from './dir-attr/dir-attr.component';
import { Hello9Component } from './hello9/hello9.component';
import { HighlightDirective } from './highlight.directive';
import { DirCustComponent } from './dir-cust/dir-cust.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserNew18Component } from './user-new18/user-new18.component';
import { UserNew19Component } from './user-new19/user-new19.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLikeComponent } from './user-like/user-like.component';

const appRoutes: Routes = [
  {
    path: 'one',
    component: Routing1Component
  },
  {
    path: 'two',
    component: Routing2Component
  },
  {
    path: 'three',
    component: Routing3Component
  }
];

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
    Users27Component,
    AddItemComponent,
    UserFormComponent,
    UserRFormComponent,
    Routing1Component,
    Routing2Component,
    Routing3Component,
    MyHttpComponent,
    CoderGetAllComponent,
    CoderSaveComponent,
    PipExComponent,
    MyPipe,
    SimpleComponent,
    DirStrutComponent,
    DirAttrComponent,
    Hello9Component,
    HighlightDirective,
    DirCustComponent,
    UserNewComponent,
    UserNew18Component,
    UserNew19Component,
    UserListComponent,
    UserLikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
