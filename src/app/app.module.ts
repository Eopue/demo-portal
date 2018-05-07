import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpRequestService } from "./http-request.service";
import { SkuFromComponent } from './sku-from/sku-from.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuFromComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
