import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerEnquiry } from 'app/model/customer-enquiry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
url:string="http://localhost:3000/EnquiryForm";
  constructor(private http:HttpClient) { }
  savecustomerenquiry(customerenquiry:CustomerEnquiry):Observable<CustomerEnquiry>
  {

    return this.http.post<CustomerEnquiry>(this.url, customerenquiry);
  }
}
