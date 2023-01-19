import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NavbarComponent,
      },
      {
        path: 'Home',
        component: NavbarComponent,
      },
    ],
  },
  {
    path: 'Courses',
    component: NavbarComponent,
  },
  {
    path: 'Announcement',
    component: NavbarComponent,
  },
  {
    path: 'Gallery',
    component: NavbarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
