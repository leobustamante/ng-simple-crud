import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Sistema de cadastro de clientes';
  appLogoUrl = '/assets/img/logo.png';

  constructor() { }

  ngOnInit() {
  }

}