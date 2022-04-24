import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {LogoComponent} from "./components/logo/logo.component";
import {HttpClientModule} from "@angular/common/http";
import {FundingModule} from "./core/funding/funding.module";

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    MatToolbarModule,

    FundingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
