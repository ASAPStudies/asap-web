import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormSubmittedEvent,
} from '@angular/forms';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { ICountry, NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { FormService } from '../../services/data/form.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-long-term',
  standalone: true,
  imports: [
    NgxCountriesDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    AngularToastifyModule,
  ],
  templateUrl: './long-term.component.html',
  styleUrl: './long-term.component.css',
})
export class LongTermComponent {
  ages: string[] = ['Below 16', '16-20', '21-30', '30-40', '40-60', '60+'];
  subjects: string[] = [
    'Accounting',
    'Integrated Science',
    'Biology',
    'Mathematics',
    'Civil Engineering',
    'Electrical Engineering',
    'Computer Engineering',
    'Finance',
    'Elective Mathematics',
    'Economics',
    'Operations Management',
    'Social Studies',
    'Basic Mathematics',
    'English',
    'French',
    'Advance Math (Calculus Included)',
  ];
  educationList = [
    'Below Elementary/JHS',
    'Elementary/JHS',
    'High School',
    'College/University',
    'Training College',
    'Other',
  ];

  formData = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone_number: new FormControl('', Validators.pattern(/^\d{10}$/)), // Example for a 10-digit phone number
    message: new FormControl(''),
    country: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(0)]), // Assuming age can't be negative
    education: new FormControl('', Validators.required),
    topic: new FormControl('', Validators.required),
    days_available: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
    time: new FormControl(''),
  });
  isLoading: boolean = false;

  onCountryChange(country: any) {
    this.formData.value.country = country.name;
  }
  constructor(private toast: ToastService, private formService: FormService) {}
  submit() {
    this.isLoading = true;
    
    this.formService.postData(this.formData.value).subscribe((res) => {
      this.isLoading = false;
      this.formData.reset();

      this.isLoading = false
    });
    // Check if the form is valid
    if (this.formData.invalid) {
      this.openToast('info', 'Incomplete Form');
      this.isLoading = false;

      return;
    }
  }

  openToast(type: string, message: string) {
    type === 'success' ? this.toast.success(message) : this.toast.error(message);
  }
}
