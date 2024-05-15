import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Home/home.component";
import { listingComponent } from "./listing/listing.component";
import { DetailsComponent } from "./details/details.component";
import {NotFoundComponent} from "./notfound/notfound.component"

const routes: Routes = [
    {path: "details", component: DetailsComponent},
    {path: "listing/:id", component:listingComponent},
    {path: "",component:HomeComponent},
    {path: "**", pathMatch:"full", component:NotFoundComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers:[],
    exports:[RouterModule]
})

export class AppRoutingModule{}