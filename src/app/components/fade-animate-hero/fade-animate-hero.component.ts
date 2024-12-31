import {
  state,
  style,
  trigger,
  transition,
  animate,
} from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fade-animate-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './fade-animate-hero.component.html',
  styleUrls: ['./fade-animate-hero.component.css'], // Fixed 'styleUrl' to 'styleUrls'
  animations: [
    trigger('fade', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden <=> visible', animate('4s ease-in-out')),
    ]),
  ],
})
export class FadeAnimateHeroComponent {
  isImageVisible = true; // Fixed typo in variable name
  imagesList: string[] = ['slides1.png', 'slides2.png', 'slides3.png'];
  imageIndex: number = 0;
  currentImage: string = this.imagesList[this.imageIndex];
  constructor(){
    setInterval(this.switchImage,1000)
  }
  toggleText() {
    this.isImageVisible = !this.isImageVisible; // Simplified toggle logic
  }
  switchImage() {
    console.log('switching')
    this.imageIndex = (this.imageIndex + 1) % this.imagesList.length;
    this.toggleText()
  }
}
