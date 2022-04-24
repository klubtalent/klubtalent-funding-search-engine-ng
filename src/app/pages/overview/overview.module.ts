import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from "./pages/overview/overview.component";
import {FundingListComponent} from "./components/funding-list/funding-list.component";
import {FundingListItemComponent} from "./components/funding-list-item/funding-list-item.component";
import {MatCardModule} from "@angular/material/card";
import {OverviewRoutingModule} from "./overview-routing.module";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    OverviewComponent,
    FundingListComponent,
    FundingListItemComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatDialogModule,

    OverviewRoutingModule
  ]
})
export class OverviewModule {
}
