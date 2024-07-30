import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ], // is for non standalone components
  bootstrap: [AppComponent], // the root component
  imports: [
    // is for standalone components
    BrowserModule,
    NgFor,
    NgIf,
    FormsModule,
    SharedModule,
  ],
})
export class AppModule {}
