import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from "./pages/overview/overview.component";
import {FundingListComponent} from "./components/funding-list/funding-list.component";
import {FundingListItemComponent} from "./components/funding-list-item/funding-list-item.component";
import {MatCardModule} from "@angular/material/card";
import {OverviewRoutingModule} from "./overview-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {TagChipsModule} from "../../ui/tag-chips/tag-chips.module";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {OverviewToolbarComponent} from './components/overview-toolbar/overview-toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {LogoComponent} from "./components/logo/logo.component";
import {SearchPanelComponent} from "./components/search-panel/search-panel.component";
import {SearchPanelTopicsComponent} from "./components/search-panel-topics/search-panel-topics.component";
import {SearchPanelVolumeComponent} from "./components/search-panel-volume/search-panel-volume.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LogoComponent,
    OverviewComponent,
    FundingListComponent,
    FundingListItemComponent,
    OverviewToolbarComponent,
    SearchPanelComponent,
    SearchPanelTopicsComponent,
    SearchPanelVolumeComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatSliderModule,
    MatToolbarModule,

    TagChipsModule,

    OverviewRoutingModule
  ]
})
export class OverviewModule {
}
