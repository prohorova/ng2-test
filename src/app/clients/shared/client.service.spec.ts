/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions }
  from '@angular/http';
import { ClientService } from './client.service';

describe('ClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClientService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should ...', inject([ClientService], (service: ClientService) => {
    expect(service).toBeTruthy();
  }));
});
