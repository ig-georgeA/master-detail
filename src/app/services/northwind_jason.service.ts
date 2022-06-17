import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

export interface ICustomer {
    "customerID": string;
    "companyName": string;
    "contactName": string;
    "contactTitle": string;
    "address": string;
    "city": string;
    "region": string | null;
    "postalCode": string;
    "country": string;
    "phone": string;
    "fax": string;
    "orders": unknown[];
    "customerTypes": unknown[];
}

@Injectable({
  providedIn: 'root'
})
export class Northwind_JasonService {
  constructor(private http: HttpClient) { }

  public getApiCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${API_ENDPOINT}/api/customers`);
  }
  public getApiCustomerOrdersCustomerId(customerId: string): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/customer_orders/${customerId}`);
  }
  public getApiCustomerOrderDetailsOrderId(orderId: number): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/customer_order_details/${orderId}`);
  }
}
