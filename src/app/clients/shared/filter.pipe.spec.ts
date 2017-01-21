/* tslint:disable:no-unused-variable */

import { FilterPipe } from './filter.pipe';
import { IClient } from './client.model';

let clients : IClient[] = [
  {
    general: {
      firstName: "Liana",
      lastName: "Crooks",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
    },
    job: {
      company: "Ledner, Johnson and Predovic",
      title: "Investor Functionality Coordinator"
    },
    contact: {
      email: "Gerry_Hackett77@gmail.com",
      phone: "(895) 984-0132"
    },
    address: {
      street: "1520 Zemlak Cove",
      city: "New Devon",
      zipCode: "42586-7898",
      country: "Guinea-Bissau"
    }
  },
  {
    general: {
      firstName: "Deontae",
      lastName: "Dare",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
    },
    job: {
      company: "D'Amore, Dicki and Borer",
      title: "International Applications Consultant"
    },
    contact: {
      email: "Kellie.Marvin38@yahoo.com",
      phone: "1-615-843-3426 x600"
    },
    address: {
      street: "65901 Glover Terrace",
      city: "Alden ton",
      zipCode: "57744-4248",
      country: "Kenya"
    }
  }
];

describe('FilterPipe', () => {
  it('should create an instance', () => {
    let pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter clients', () => {
    let pipe = new FilterPipe();
    let filteredClients = pipe.transform(clients, 'Liana');
    expect(filteredClients).toEqual(clients.slice(0 , 1));
  });

  it('should filter clients case insensitive', () => {
    let pipe = new FilterPipe();
    let filteredClients = pipe.transform(clients, 'predovic');
    expect(filteredClients).toEqual(clients.slice(0 , 1));
  });

  it('should not use avatar field value for filtering', () => {
    let pipe = new FilterPipe();
    let filteredClients = pipe.transform(clients, 'kevinoh');
    expect(filteredClients.length).toBe(0);
  })
});
