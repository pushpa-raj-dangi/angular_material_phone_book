import { Injectable } from '@angular/core';

interface IContact {
  name: string;
  number: string;
}
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}
  getContacts() {
    let contacts: IContact[] = [
      {
        name: 'Pushpa',
        number: '09484948595',
      },
      {
        name: 'Ram',
        number: '09484948595',
      },
      {
        name: 'Shyam',
        number: '09484948595',
      },
      {
        name: 'Hari',
        number: '09484948595',
      },
      {
        name: 'Gopal',
        number: '09484948595',
      },
    ];
    return contacts;
  }
}
