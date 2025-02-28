import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
  
export class ContactComponent {
  favoriteFramework: string = '';

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  sendForm(): void {
    console.log(this.favoriteFramework);
  }

  handleContacFormSubmit(): void{
    console.log(this.contactForm.value);
  }
}
