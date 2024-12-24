import { Component } from '@angular/core';
import { GhanaCedisPipe } from '../../pipes/currency/currency.pipe';
import { PlanCardComponent } from '../plan-card/plan-card.component';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css',
  standalone: true,
  imports: [GhanaCedisPipe, PlanCardComponent],
})
export class PlansComponent {
  freeItems: string[] = [
    'You’re limited to posting only 1 request every 48 hours.',
    'Get verified answers from Tutors momentarily',
    'Post Question, Research work, Project Work and get answers momentarily.',
  ];
  premuimItems: string[] = [
    'Post Question, Research work, Project Work and get answers  momentarily',
    'Take lineage or  advantage of the opportunity to resubmit questions for answers with no time restrictions or schedule live tutoring sessions for personalized support.',
    'Offers AI content verification. An “AI check” button that ensure the authenticity, accuracy, reliability and precision from expert tutors to empower you with the confidence you need for success.',
  ];
}
