import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private http = inject(HttpClient);

  submitForm(formData: { name: string; email: string; phone?: string; message: string }): Observable<unknown> {
    return this.http.post(
      'https://twg-template-submission-92b1532f00c1.herokuapp.com/send-email-universal',
      { ...formData, businessEmail: 'info@havenfitclub.com' }
    );
  }
}
