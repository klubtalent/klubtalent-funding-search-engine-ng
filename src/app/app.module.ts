import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {LogoComponent} from "./pages/overview/components/logo/logo.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UiModule} from "./core/ui/ui.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    UiModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
