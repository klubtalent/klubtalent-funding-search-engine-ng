import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsRoutingModule} from './details-routing.module';
import {DetailsComponent} from './pages/details/details.component';
import {DetailsToolbarComponent} from './components/details-toolbar/details-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {TagChipsModule} from '../../ui/tag-chips/tag-chips.module';
import {MatChipsModule} from '@angular/material/chips';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {ContactBottomSheetComponent} from './components/contact-bottom-sheet/contact-bottom-sheet.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
    declarations: [
        DetailsComponent,
        DetailsToolbarComponent,
        ContactBottomSheetComponent
    ],
    exports: [
        DetailsComponent
    ],
    imports: [
        CommonModule,
        DetailsRoutingModule,

        MatBottomSheetModule,
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        TagChipsModule
    ]
})
export class DetailsModule {
}
