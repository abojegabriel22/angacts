import { NgModule } from "@angular/core";
import { MyUpperPipe } from "../pipes/myupper.pipe";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing.modules";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        MyUpperPipe
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule
    ],
    exports: [
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule,
        MyUpperPipe
    ],
})

export class SharedModule{}