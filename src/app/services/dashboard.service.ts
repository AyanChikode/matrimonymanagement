import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private api = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<any[]>(`${this.api}/customers/list`);
  }

  getAdmins() {
    return this.http.get<any[]>(`${this.api}/admin/list`);
  }

  getConsultancies() {
    return this.http.get<any[]>(`${this.api}/Consultancies/list`);
  }

  getReligions() {
    return this.http.get<any[]>(`${this.api}/religion/list`);
  }

  getCastes() {
    return this.http.get<any[]>(`${this.api}/castes/list`);
  }

  getSubcastes() {
    return this.http.get<any[]>(`${this.api}/subcastes/list`);
  }

  getStates() {
    return this.http.get<any[]>(`${this.api}/states/list`);
  }

  getDistricts() {
    return this.http.get<any[]>(`${this.api}/districts/list`);
  }

  getTalukas() {
    return this.http.get<any[]>(`${this.api}/talukas/list`);
  }

  getVillages() {
    return this.http.get<any[]>(`${this.api}/villages/list`);
  }

  getCustomerProfiles() {
  return this.http.get<any[]>(
    `${this.api}/customerprofiles/list`
  );
}
}