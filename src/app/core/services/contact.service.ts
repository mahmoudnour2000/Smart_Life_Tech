import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactFormData } from '../models/contact-form';
import { ApiResponse } from '../models/api-response';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  submitContactForm(formData: ContactFormData): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<ApiResponse>(
      `${this.apiUrl}/contact`,
      formData,
      { headers }
    ).pipe(
      tap(response => {
        console.log('Contact form submitted successfully:', response);
      }),
      catchError(error => {
        console.error('Error submitting contact form:', error);
        return throwError(() => error);
      })
    );
  }

}
