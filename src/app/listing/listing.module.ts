import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { costFilter } from "../filters/costFilter.component";
import { cuisoneComponent } from "../filters/cuisoneFilter.component";
import { RestSearchFilter } from "../pipes/searchFilter";
import { listingComponent } from "./listing.component";
import { listingService } from "../services/listing.service";

@NgModule({
    declarations: [
        listingComponent,
        RestSearchFilter,
        cuisoneComponent,
        costFilter
    ],
    imports: [
        SharedModule
    ],
    providers: [
        listingService
    ]
})

export class ListingModule{}