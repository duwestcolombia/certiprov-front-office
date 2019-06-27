import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../../services/service.index';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menu:any =[];

  constructor(public _sidebarService:SidebarService) { }

  ngOnInit() {
    this.menu = this._sidebarService.menu;
  }

}
