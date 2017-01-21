import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { IClient } from './client.model';

@Injectable()
export class ClientService {

  constructor(private http: Http) { }

  getClients(): Observable<IClient[]> {
    return this.http.get('assets/clients.json')
      .map(res => res.json())
  }

}
