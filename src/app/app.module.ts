import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
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
import { UserList26Component } from './user-list26/user-list26.component';

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
    UserLikeComponent,
    UserList26Component
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
