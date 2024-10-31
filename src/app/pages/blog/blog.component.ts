import { Component } from "@angular/core";
import { PostCardComponent } from "../../components/post-card/post-card.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  imports: [PostCardComponent],
})
export class BlogComponent {
  posts: any = [1, 2, 3, 4, 5, 6, 7, 8];
}