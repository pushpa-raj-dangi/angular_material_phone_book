import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: any[];

  constructor(
    private contactService: ContactsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  add() {
    let dialogRef = this.dialog.open(AddContactDialog);
    dialogRef.afterClosed().subscribe((contact) => {
      if (contact) {
        this.contacts.push(contact);
      }
    });
  }

  delete(contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }
}

@Component({
  selector: 'add-contact-dialog',
  template: `
    <h1 mat-dialog-title>Add Contact</h1>

    <form class="example-form">
      <mat-form-field class="example-full-width">
        <mat-label>Name</mat-label>
        <input matInput #contactName placeholder="" value="" />
      </mat-form-field>
      <div class="space"></div>
      <mat-form-field class="example-full-width">
        <mat-label>Number</mat-label>
        <input matInput #contactNumber placeholder="" value="" />
      </mat-form-field>
    </form>
    <button
      mat-raised-button
      color="primary"
      (click)="
        dialogRef.close({
          name: contactName.value,
          number: contactNumber.value
        })
      "
    >
      Save
    </button>

    <button mat-raised-button (click)="dialogRef.close()">
      Close
    </button>
  `,
})
export class AddContactDialog {
  controlType = 'example-tel-input';
  constructor(public dialogRef: MatDialogRef<AddContactDialog>) {}
}
