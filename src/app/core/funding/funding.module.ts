import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FundingService} from "./services/funding.service";
import {FilterService} from "./services/filter.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: [
    FundingService,
    FilterService
  ]
})
export class FundingModule {
}
