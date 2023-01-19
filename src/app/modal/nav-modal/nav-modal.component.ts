import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, Event } from '@angular/router';
@Component({
  selector: 'app-nav-modal',
  templateUrl: './nav-modal.component.html',
  styleUrls: ['./nav-modal.component.css'],
})
export class NavModalComponent {
  constructor(public dialog: MatDialog, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.dialog.closeAll();
    });
  }
}
