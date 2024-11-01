import { NgFor } from "@angular/common";
import { Component, ElementRef } from "@angular/core";

@Component({
  standalone: true,
  templateUrl: './terms-page.component.html',
  styleUrl: './terms-page.component.css',
  imports:[NgFor]
})
export class TermsPageComponent {
  sectionTitles = [
    'What information do we collect?',
    'How do we process your information?',
    'Do we receive any information from third parties?',
    'How do we process your information?',
    'In what situations and with which parties do we share personal information?',
    'Is your information transferred internationally?',
    'How long do we keep your information?',
    'How do we keep your information safe?',
    'What are your privacy rights?',
    'Controls for do-not-track features',
    'Do California residents have specific privacy rights?',
    'Do we make updates to this notice?',
    'How can you contact us about this notice?',
    'How can you review, update, or delete the data we collect from you?',
  ];
  constructor(private el: ElementRef) {}

  
  scrollTo(sectionId: number) {
    const section = this.el.nativeElement.querySelector(`#section${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}