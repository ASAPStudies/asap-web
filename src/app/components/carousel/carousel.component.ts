import {
  state,
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';
import { NgClass, NgOptimizedImage } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('6s ease-in-out')),
    ]),
  ],
})
export class CarouselComponent implements AfterViewInit {
  constructor() {
    if (this.autoScroll) {
      setInterval(() => {
        this.autoScrollImages();
      }, this.scrollDelay);
    }
  }
  imagesList: string[] = ['caro/s1.png', 'caro/c2.png', 'caro/s3.png'];
  currentIndex: number = 0;
  totalSlides: number = 0;
  @Input() slides!: string[];
  @Input() scrollDelay: number = 7000;
  @Input() autoScroll: boolean = true;
  @ViewChild('carousel', { static: true })
  carousel!: ElementRef<HTMLDivElement>; 
  @ViewChild('next', { static: true })
  nextButton!: ElementRef<HTMLDivElement>;
  ngAfterViewInit() {
    this.totalSlides = this.carousel.nativeElement.children.length;
  }
  scrollCarousel(direction: number): void {
    this.currentIndex =
      (this.currentIndex + direction + this.totalSlides) % this.totalSlides;
    this.carousel.nativeElement.style.transform = `translateX(-${
      this.currentIndex * 100
    }%)`;
  }

  autoScrollImages() {
    this.currentIndex += 1;
    if (this.currentIndex >= this.totalSlides) {
      this.currentIndex = 0;
    }

    const button = this.nextButton.nativeElement;
    button.click();

    console.log('current index', this.currentIndex);
  }

  switch(num: number) {
    this.currentIndex = num;
    const button = this.nextButton.nativeElement;
    button.classList.toggle('hidden-button');
    button.click();
  }
}
