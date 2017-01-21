/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientsComponent } from './clients.component';
import { ClientService } from './shared/client.service';
import { Observable } from "rxjs";

let mockClientService = {
  getClients: () => {
    return new Observable(observer => {
      observer.next([]);
    });
  }
};

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsComponent ],
      providers: [{provide: ClientService, useValue: mockClientService}],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
