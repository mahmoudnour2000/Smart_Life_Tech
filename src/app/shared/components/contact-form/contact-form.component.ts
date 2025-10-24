import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormData } from '../../../core/models/contact-form';
import { ContactService } from '../../../core/services/contact.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
    imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() title: string = 'Ready to start a partnership with Life Tech';
  @Input() subtitle: string = "Fill out the form below and let's shape the future together";
  @Input() buttonText: string = 'Send Message';
  @Input() showCompanyField: boolean = true;
  @Input() showPositionField: boolean = true;
@Input() userIcon: string = 'assets/images/user.png';
  @Input() emailIcon: string = 'assets/images/email-icon.png';
  @Input() locationIcon: string = 'assets/images/location-icon.png';
  @Input() phoneIcon: string = 'assets/images/phone-icon.png';
  @Input() messageIcon: string = 'assets/images/message-icon.png';
  contactForm!: FormGroup;
  isSubmitting = false;
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      position: [''],
      city: ['', Validators.required],
      countryCode: ['+20'],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      const formData: ContactFormData = {
        ...this.contactForm.value,
        phoneNumber: `${this.contactForm.value.countryCode}${this.contactForm.value.phone}`
      };

      // الربط مع الـ Service
      this.contactService.submitContactForm(formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.showSuccessToast(response.message || 'Message sent successfully! We will contact you soon.');
          this.contactForm.reset({
            countryCode: '+966'
          });
        },
        error: (error) => {
          this.isSubmitting = false;
          const errorMessage = error.error?.message || 'Failed to send message. Please try again.';
          this.showErrorToast(errorMessage);
        }
      });
      
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  showSuccessToast(message: string): void {
    this.toastType = 'success';
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => this.closeToast(), 5000);
  }

  showErrorToast(message: string): void {
    this.toastType = 'error';
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => this.closeToast(), 5000);
  }

  closeToast(): void {
    this.showToast = false;
  }
 

}
