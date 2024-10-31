import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AboutComponent } from "../../components/about-section/about.component";
import { HowAsapHelpsComponent } from "../../components/how-asap-helps/asaphelps.component";
import { PlansComponent } from "../../components/plans/plans.component";
import { FaqsComponent } from "../../components/faq-section/faq.component";
import { ButtonModule } from 'primeng/button';
@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrl:'./home.component.css',
    standalone:true,
    imports: [RouterLink,
    AboutComponent,
    HowAsapHelpsComponent,
    PlansComponent,
    FaqsComponent,
    ButtonModule,
]
})

export class HomeComponent {

}