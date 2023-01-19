import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavModalComponent } from './../../modal/nav-modal/nav-modal.component';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentRoute: string = '';

  constructor(public dialog: MatDialog, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      // if (event instanceof NavigationStart) {
      //   // Show progress spinner or progress bar
      //   console.log('Route change detected');
      // }

      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url.replace('/', '');
        console.log(event);
        console.log(this.currentRoute);

        const NavLi = document.querySelectorAll('nav ul li');
        NavLi.forEach((i) => {
          i.classList.remove('active');
          if (i.classList.contains(this.currentRoute)) {
            i.classList.add('active');
          }
        });
      }
    });
  }

  ngOnInit(): void {}

  nav_toogle() {
    this.dialog.open(NavModalComponent);
  }
}
