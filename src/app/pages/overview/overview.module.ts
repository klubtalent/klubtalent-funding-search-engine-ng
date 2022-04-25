import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from "./pages/overview/overview.component";
import {FundingListComponent} from "./components/funding-list/funding-list.component";
import {FundingListItemComponent} from "./components/funding-list-item/funding-list-item.component";
import {MatCardModule} from "@angular/material/card";
import {OverviewRoutingModule} from "./overview-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {TagChipsModule} from "../../ui/tag-chips/tag-chips.module";
import {UiModule} from "../../core/ui/ui.module";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    OverviewComponent,
    FundingListComponent,
    FundingListItemComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,

    UiModule,
    TagChipsModule,

    OverviewRoutingModule
  ]
})
export class OverviewModule {
}
