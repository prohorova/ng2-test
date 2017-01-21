import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {IClient} from "../shared/client.model";

@Component({
  selector: 'app-client-details',
  templateUrl: 'client-details.component.html',
  styleUrls: ['client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  @Input() client: IClient;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getClientEmail(email) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`mailto:${email}`);
  }

}
