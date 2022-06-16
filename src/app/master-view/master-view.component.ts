import { Component, OnInit } from '@angular/core';
import { Northwind_JasonService } from '../services/northwind_jason.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public northwindJasonApiCustomers: any = null;
  public northwindJasonApiCustomerOrdersCustomerId: any = null;
  public northwindJasonApiCustomerOrderDetailsOrderId: any = null;

  constructor(
    private northwind_JasonService: Northwind_JasonService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwind_JasonService.getApiCustomers().subscribe(data => this.northwindJasonApiCustomers = data);
    this.northwind_JasonService.getApiCustomerOrdersCustomerId().subscribe(data => this.northwindJasonApiCustomerOrdersCustomerId = data);
    this.northwind_JasonService.getApiCustomerOrderDetailsOrderId().subscribe(data => this.northwindJasonApiCustomerOrderDetailsOrderId = data);
  }
}
