import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormService } from '../../services/data/form.service';
import { from } from 'rxjs';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [FormsModule, ReactiveFormsModule, AngularToastifyModule],
  
})
export class ContactComponent {
  formData = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl(''),
  });

  constructor(private toast:ToastService) {}
  submit() {
    // Check if the form is valid
    if (this.formData.invalid) {
            this.openToast('info', 'Incomplete Form');

      return;
    }

    const dataSub = from(
      fetch('https://formsubmit.co/ajax/yelpoeayahaya@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(this.formData.value), // Use form value here
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) =>
          this.toast.error("There was and error")
        )
    );
    if (this.formData.valid){
      this.openToast("info", "Complete Form")
    }
    dataSub.subscribe(()=>{
      this.openToast("success", "Message sent")
      this.formData.reset()
    });
    
  }

  openToast(type:string, message:string){
    type === 'success'
      ? this.toast.success(message)
      : this.toast.info(message);
    
  }
}
