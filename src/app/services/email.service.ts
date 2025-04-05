import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
  private apiUrl = 'https://marzighased.de/sendMail.php';

  constructor(private http: HttpClient) { }

  sendEmail(formData: ContactForm): Observable<EmailResponse> {
    return this.http.post<EmailResponse>(this.apiUrl, formData); 
  }
}
