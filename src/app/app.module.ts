import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewlyMintedPopUpModule } from './newly-minted-pop-up/newly-minted-pop-up.module';
import { BackButtonModule } from './back-button/back-button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NewlyMintedPopUpModule,
    BackButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
