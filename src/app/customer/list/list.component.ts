import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged'

import { Customer } from '../../providers/models/customer';
import { CustomerService } from '../../providers/services/customer.service';

import {AddComponent} from '../../dialogs/add/add.component';
import {EditComponent} from '../../dialogs/edit/edit.component';
import {DeleteComponent} from '../../dialogs/delete/delete.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns = ['id', 'nome', 'email', 'endereco', 'bairro', 'cidade', 'estado', 'telefone'];
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