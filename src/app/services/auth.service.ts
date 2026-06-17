import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  // ================= CUSTOMER =================

  register(data: any) {
    return this.http.post(
      `${this.api}/customers/register`,
      data
    );
  }

  sendCustomerOtp(data: any) {
    return this.http.post(
      `${this.api}/auth/customer/mailSend`,
      data
    );
  }

  // ================= ADMIN =================

  adminRegister(data: any) {
    return this.http.post(
      `${this.api}/admin/register`,
      data
    );
  }

  sendAdminOtp(data: any) {
    return this.http.post(
      `${this.api}/auth/mailSend`,
      data
    );
  }

  // ================= LOGIN =================

  login(data: any) {

    if (data.role === 'ADMIN') {

      return this.http.post(
        `${this.api}/auth/admin/login`,
        {
          email: data.email,
          password: data.password
        }
      );
    }

    return this.http.post(
      `${this.api}/auth/customer/login`,
      {
        email: data.email,
        password: data.password
      }
    );
  }

  // ================= OTP VERIFY =================

  verifyOtp(data: any) {

    return this.http.post(
      `${this.api}/auth/otp-verify`,
      data
    );

  }

  // ================= PASSWORD RESET =================

  resetPassword(data: any) {

    return this.http.post(
      `${this.api}/password-reset/newpassword`,
      data
    );

  }

}