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
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements AfterViewInit {
  constructor() {
    if (this.autoScroll) {
      setInterval(() => {
        this.autoScrollImages();
      }, this.scrollDelay);
    }
  }
  imagesList: string[] = ['caro/c1.webp', 'caro/c2.webp', 'caro/c3.webp'];
  currentIndex: number = 0;
  totalSlides: number = 0;
  @Input() slides!: string[];
  @Input() scrollDelay: number = 7000;
  @Input() autoScroll: boolean = true;
  @ViewChild('carousel', { static: true })
  carousel!: ElementRef<HTMLDivElement>; // Use ElementRef for type safety

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

    // Optionally toggle visibility here
    const button = this.nextButton.nativeElement;
    button.classList.toggle('hidden-button'); // Hide or show the button

    // Click the button programmatically
    button.click();

    console.log('current index', this.currentIndex);
  }
}
