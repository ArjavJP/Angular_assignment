import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  feedbackForm: FormGroup;
  submitted = false; 
  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true; 
    this.feedbackForm.markAllAsTouched();

    if (this.feedbackForm.invalid) return;

    alert('Submitted:\n' + JSON.stringify(this.feedbackForm.value, null, 2));
    this.feedbackForm.reset();
    this.submitted = false; 
  }
}
