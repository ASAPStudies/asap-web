import { Component } from '@angular/core';
import { FormsModule, 
  ReactiveFormsModule, 
  FormGroup, 
  FormControl, 
  Validators } from '@angular/forms';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';

@Component({
  selector: 'app-long-term',
  standalone: true,
  imports: [NgxCountriesDropdownModule, FormsModule, ReactiveFormsModule],
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
    message: new FormControl('', ),
    country: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(0)]), // Assuming age can't be negative
    education: new FormControl('', Validators.required),
    topic: new FormControl('', Validators.required),
    days_available: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
    time: new FormControl('', ),
    
  });

  submitForm(): void {
    console.log(this.formData.value);
    if (this.formData.invalid){
      console.log('invalid')
    }
  }
}
