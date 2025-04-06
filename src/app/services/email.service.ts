import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  privacyPolicy: boolean;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private formspreeUrl = 'https://formspree.io/f/movepval';

  constructor(private http: HttpClient) { }

  sendEmail(formData: ContactForm): Observable<EmailResponse> {
    return this.http.post(this.formspreeUrl, formData).pipe(
      map((response: any) => {
        return {
          success: true,
          message: 'Email sent successfully'
        };
      })
    );
  }
}