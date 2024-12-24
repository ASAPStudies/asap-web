import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent } from '../../components/about-section/about.component';
import { HowAsapHelpsComponent } from '../../components/how-asap-helps/asaphelps.component';
import { PlansComponent } from '../../components/plans/plans.component';
import { FaqsComponent } from '../../components/faq-section/faq.component';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Fixed property name
  standalone: true,
  imports: [
    RouterLink,
    PlansComponent,
    FaqsComponent,
    ButtonModule,
    CarouselComponent,
    HowAsapHelpsComponent
],
})
export class HomeComponent {
  imagesList: string[] = ['./caro/s1.png', './caro/s2.png', './caro/s2.png'];
  
}
