import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector:'app-about',
    standalone:true,
    templateUrl:'./about.component.html',
    styleUrl:'./about.component.css',
    imports:[NgOptimizedImage]
})

export class AboutPageComponent {
    
}