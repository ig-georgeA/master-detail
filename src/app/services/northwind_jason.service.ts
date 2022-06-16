import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class Northwind_JasonService {
  constructor(private http: HttpClient) { }

  public getApiCustomers(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/customers`);
  }
  public getApiCustomerOrdersCustomerId(customerId = 'ALFKI'): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/customer_orders/${customerId}`);
  }
  public getApiCustomerOrderDetailsOrderId(orderId = '10248'): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/customer_order_details/${orderId}`);
  }
}
