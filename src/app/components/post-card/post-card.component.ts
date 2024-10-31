import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  @Input() postImageUrl: string = 'assets/about-bg.jpg';
  @Input() postTitle: string =
    'College Students Have Something to Say. It’s Just Not What You’d Expect.';
}
