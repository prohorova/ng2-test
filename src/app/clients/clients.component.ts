import { Component, OnInit } from '@angular/core';
import { ClientService } from './shared/client.service';

import { IClient } from './shared/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.component.html',
  styleUrls: ['clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: IClient[];
  selected: IClient;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
    })
  }

  onClientSelected(client: IClient) {
    this.selected = client;
  }
}
