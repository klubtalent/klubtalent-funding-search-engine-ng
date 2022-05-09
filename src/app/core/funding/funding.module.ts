import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FundingGithubService} from "./services/funding-github.service";
import {FilterService} from "./services/filter.service";
import {FundingFirestoreService} from "./services/funding-firestore.service";
import {FundingMockService} from "./services/funding-mock.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: [
    FundingFirestoreService,
    FundingGithubService,
    FundingMockService,
    FilterService
  ]
})
export class FundingModule {
}
