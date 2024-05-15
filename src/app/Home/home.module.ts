import { NgModule } from "@angular/core";
import { QuickSearch } from "./QuickSearch/quickSearch.component";
import { SearchComponent } from "./Search/search.component";
import { HomeComponent } from "./home.component";
import { HomeService } from "../services/home.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent,
        QuickSearch
    ],
    imports: [
        SharedModule
    ],
    providers: [
        HomeService
    ]
})

export class HomeModule{}