import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Sistema de cadastro de clientes';
  appLogoUrl = '/assets/img/logo/logo6.jpg';

  constructor() { }

  ngOnInit() {
  }

}
