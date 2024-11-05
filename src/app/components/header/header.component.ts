import { NgClass } from '@angular/common';
import { Component} from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { PromoHeaderComponent } from '../promo-header/promo-header.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, PromoHeaderComponent],
})
export class HeaderComponent {
  showSidebar: boolean = false;
  
  openSideBar(){
    this.showSidebar = true
  }
}