import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private api = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  getStates() {
    return this.http.get(`${this.api}/states/list`);
  }

  getDistricts() {
    return this.http.get(`${this.api}/districts/list`);
  }

  getTalukas() {
    return this.http.get(`${this.api}/talukas/list`);
  }

  getVillages() {
    return this.http.get(`${this.api}/villages/list`);
  }

  getReligions() {
    return this.http.get(`${this.api}/religion/list`);
  }

  getCastes() {
    return this.http.get(`${this.api}/castes/list`);
  }

  getSubcastes() {
    return this.http.get(`${this.api}/subcastes/list`);
  }

  getConsultancies() {
    return this.http.get(`${this.api}/Consultancies/list`);
  }
}