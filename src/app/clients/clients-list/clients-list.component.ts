import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IClient } from '../shared/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  @Input() clients: IClient[];
  @Input() selected: IClient;
  @Output() clientSelected = new EventEmitter<IClient>();

  search: string;

  constructor() { }

  ngOnInit() {}

  isSelected(client: IClient) {
    return client === this.selected;
  }

  onSearchChange(search: string) {
    this.search = search;
  }

  onSelect(client: IClient) {
    this.clientSelected.next(client);
  }
}
