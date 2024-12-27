import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, AfterViewInit} from '@angular/core';

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
  imagesList: string[] = ['caro/s1.png', './caro/s2.png', './caro/s3.png'];
  currentIndex: number = 0;
  totalSlides:number = 0;
  @Input() slides!: string[];
  @Input() scrollDelay:number =7000
  @Input() autoScroll: boolean= true;
  @ViewChild('carousel', { static: true })
  carousel!: ElementRef<HTMLDivElement>; // Use ElementRef for type safety

  ngAfterViewInit() {
    this.totalSlides = this.carousel.nativeElement.children.length
  }
  scrollCarousel(direction: number): void {
    this.currentIndex =
      (this.currentIndex + direction + this.totalSlides) % this.totalSlides;
    this.carousel.nativeElement.style.transform = `translateX(-${
      this.currentIndex * 100
    }%)`;

  }

  autoScrollImages() {
    this.scrollCarousel(-1);
  }
}
