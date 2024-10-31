import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DataService } from './services/data/data.service';
import { CustomPipe } from './pipes/custom/custom.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IStaticMethods } from 'preline/preline';
import { Router, Event, NavigationEnd } from '@angular/router';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CustomPipe,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Asap Studies';
  username: string = '';

  dataService = inject(DataService);
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {}
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}
