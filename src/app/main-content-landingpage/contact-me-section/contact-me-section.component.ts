import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, RouterModule],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {
  contactForm: FormGroup;
  showPrivacyError = false;
  showSuccessModal = false;

  constructor(private fb: FormBuilder) { 
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });

    this.contactForm.get('privacyPolicy')?.valueChanges.subscribe(value => {
      if (value) {
        this.showPrivacyError = false;
      }
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.showSuccessModal = true;
      this.contactForm.reset();
      this.showPrivacyError = false;
    } else {
      this.markFormGroupTouched(this.contactForm);
      if (!this.contactForm.get('privacyPolicy')?.value) {
        this.showPrivacyError = true;
      }
    }
  }

  closeSuccessModal() {
    this.showSuccessModal = false;
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      control.markAsDirty();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}