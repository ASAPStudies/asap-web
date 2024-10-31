import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root',
})
export class DataService {
    getData(){
        return {"message":"this is data", "statusCode":300}
    }
}