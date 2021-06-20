import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  contacts: any[];

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts().slice(0, 3);
  }
}
