import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component} from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgOptimizedImage],
})
export class HeaderComponent {
  showSidebar: boolean = false;
  
  openSideBar(){
    this.showSidebar = true
  }
}