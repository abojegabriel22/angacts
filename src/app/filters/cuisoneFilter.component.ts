import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-cuisone-filter",
    templateUrl: "./cuisoneFilter.component.html"
})

export class cuisoneComponent{
    @Input() filterName: string = ""
    cuisineType:string = ""

    @Output() cuisineClicked:EventEmitter<string> = new EventEmitter<string>()

    onCuisineSelect():void{
        this.cuisineClicked.emit(this.cuisineType)
    }
}