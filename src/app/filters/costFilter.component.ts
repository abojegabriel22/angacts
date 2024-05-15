import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-cost-filter",
    templateUrl: "./costFilter.component.html"
})

export class costFilter{
    costType:string = ""

    @Output() costClicked:EventEmitter<string> = new EventEmitter<string>()

    onCostSelect():void{
        this.costClicked.emit(this.costType)
    }
}