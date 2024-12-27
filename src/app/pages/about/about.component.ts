import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'], // Corrected from styleUrl to styleUrls
  imports: [NgOptimizedImage],
})
export class AboutPageComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('ASAP Studies | About');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Learn more about us. Asap studies online tutoring services',
      },
      {
        name: 'keywords',
        content: 'about, information, tutoring, expert, mobile app, apple, googleplay, learning',
      },
      { name: 'author', content: 'ASAP Studies, google, bing, twitter' },
    ]);
  }
}
