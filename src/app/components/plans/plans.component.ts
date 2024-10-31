import { Component } from "@angular/core";
import { GhanaCedisPipe } from "../../pipes/currency/currency.pipe";

@Component({
    selector:'app-plans',
    templateUrl:'./plans.component.html',
    styleUrl:'./plans.component.css',
    standalone:true,
    imports:[GhanaCedisPipe]
})
export class PlansComponent {

}