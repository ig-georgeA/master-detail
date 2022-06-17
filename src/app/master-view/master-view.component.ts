import { Component, OnInit } from '@angular/core';
import { IRowSelectionEventArgs } from 'igniteui-angular';
import { ICustomer, Northwind_JasonService } from '../services/northwind_jason.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public northwindJasonApiCustomers: ICustomer[] | null = null;
  public northwindJasonApiCustomerOrdersCustomerId: any = null;
  public northwindJasonApiCustomerOrderDetailsOrderId: any = null;

  public selectedCustomerId?: string;
  public get selectedCustomer() {
    return this.northwindJasonApiCustomers?.find((c: any) => c.customerID === this.selectedCustomerId);
  }

  public selectedOrderId?: number;
  public ordersAreLoading = true;
  public detailsAreLoading = true;

  constructor(
    private northwind_JasonService: Northwind_JasonService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwind_JasonService.getApiCustomers().subscribe(data => {
      this.northwindJasonApiCustomers = data;
      this.selectedCustomerId = data[0].customerID;
      this.loadCustomerData(this.selectedCustomerId)
    });
  }

  public selectCustomer(customerID: string) {
    this.selectedOrderId = undefined;
    // this.northwindJasonApiCustomerOrdersCustomerId = [];
    // this.northwindJasonApiCustomerOrderDetailsOrderId = [];

    this.selectedCustomerId = customerID;
    this.loadCustomerData(customerID);
  }

  public loadCustomerData(customerID: string) {
    this.ordersAreLoading = true;
    this.northwind_JasonService.getApiCustomerOrdersCustomerId(customerID).subscribe(data => { 
      this.northwindJasonApiCustomerOrdersCustomerId = data;
      this.ordersAreLoading = false;
      this.detailsAreLoading = false;
    });
  }

  public orderSelected(orderID: IRowSelectionEventArgs) {
    // this.northwindJasonApiCustomerOrderDetailsOrderId = [];
    this.detailsAreLoading = true;
    this.selectedOrderId = orderID.newSelection[0];
    this.northwind_JasonService.getApiCustomerOrderDetailsOrderId(orderID.newSelection[0]).subscribe(data => { 
      this.northwindJasonApiCustomerOrderDetailsOrderId = data;
      this.detailsAreLoading = false;
    });
  }
}
