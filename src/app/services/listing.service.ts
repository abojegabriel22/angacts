import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { IRest } from "../model/rest.model";
import { environment } from "../../environments/environment"

@Injectable()

export class listingService{
    constructor(private http:HttpClient){}

    

    getWrtM(mealId:Number): Observable<IRest[]>{
        const Headers = new HttpHeaders({
            "content-type": "application/json"
        })

        return this.http.get<IRest[]>(`${environment.apiUrl}/restaurant?mealtype_id=${mealId}`,{
            headers:Headers
        })
    }
    getCuisineData(cuisineId:string,mealId:Number): Observable<IRest[]>{

        return this.http.get<IRest[]>(`${environment.apiUrl}/filter/${mealId}?cuisine=${cuisineId}`)
    }

    getCostData(lcost:string, hcost:string, mealId:Number): Observable<IRest[]>{

        return this.http.get<IRest[]>(`${environment.apiUrl}/filter/${mealId}?hcost=${hcost}&lcost=${lcost}`)
    }
}