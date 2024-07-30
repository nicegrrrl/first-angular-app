import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent], // is for non standalone components
  bootstrap: [AppComponent], // the root component
  imports: [
    // is for standalone components
    BrowserModule,
    HeaderComponent,
    UserComponent,
    TasksComponent,
  ],
})
export class AppModule {}
