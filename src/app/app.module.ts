import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    HeaderComponent,
    FormsModule,
    MatSlideToggleModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
