import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Customer } from '../../providers/models/customer';
import { CustomerService } from '../../providers/services/customer.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns = ['id', 'nome', 'email', 'endereco', 'bairro', 'cidade', 'estado', 'telefone', 'actions'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private customerService: CustomerService) { }

  
  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
        .subscribe(customers => this.setCostumersTable(customers));
    
  }

  setCostumersTable(customers: Customer[]) {
    this.dataSource = new MatTableDataSource<Customer>(customers);
    this.dataSource.sort = this.sort;
  }

}