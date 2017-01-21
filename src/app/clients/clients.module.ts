import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ClientsComponent } from './clients.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { SearchComponent } from './clients-list/search/search.component';
import { ClientService } from './shared/client.service';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientDetailsComponent,
    SearchComponent,
    ClientsListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [ ClientsComponent ],
  providers: [ClientService]
})
export class ClientsModule { }
