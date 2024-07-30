import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // is for non standalone components
  bootstrap: [AppComponent], // the root component
  imports: [
    // is for standalone components
    BrowserModule,
    SharedModule,
    TasksModule,
  ],
})
export class AppModule {}
