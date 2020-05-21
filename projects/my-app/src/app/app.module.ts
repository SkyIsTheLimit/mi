import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsLoadingDirective } from './micro-interactions/button/is-loading/is-loading.directive';
import { FirstComponent } from './first/first.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressBarDirective } from './micro-interactions/button/progress-bar/progress-bar.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    IsLoadingDirective,
    ProgressBarDirective,
    ProgressSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
