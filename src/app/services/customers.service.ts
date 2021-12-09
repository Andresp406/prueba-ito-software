import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDataUser } from '../form/modals/create-user/create-user.component';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
 

  constructor(
    private _http: HttpClient,
    
  ) { }


  getAllCustomers(){
    const url = `${environment.api_base_url}/users`;
    const headers = this.headers; 
    return this._http.get<any>(url, {headers});
  }

  setCustomer(body: IDataUser){
    const url = `${environment.api_base_url}/users`;
    const headers = this.headers;
    return this._http.post<any>(url, body, {headers});
    
  }


  
  get getToken(): string {
    return localStorage.getItem('x-token') || '';
  }
 

  get headers(): HttpHeaders {
    return this._getHeaders();
  }

  private _getHeaders(): HttpHeaders {
    const token = this.getToken

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })

    return headers;
  }
}
