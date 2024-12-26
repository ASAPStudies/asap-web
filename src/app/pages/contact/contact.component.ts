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
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [FormsModule, ReactiveFormsModule, AngularToastifyModule, NgOptimizedImage],
  
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

  isLoading:boolean = false
  constructor(private toast:ToastService, private formService: FormService) {}
  submit() {
    this.isLoading  = true
    this.formService.postData(this.formData.value).subscribe((res)=>{
      this.openToast("sucess", "Form Submited")
      this.isLoading  = false
      this.formData.reset()
    })
        // Check if the form is valid
    if (this.formData.invalid) {
            this.openToast('info', 'Incomplete Form');
            this.isLoading = false
      return;
    }

    
    
  }

  openToast(type:string, message:string){
    type === 'success'
      ? this.toast.success(message)
      : this.toast.error(message);
    
  }
}
