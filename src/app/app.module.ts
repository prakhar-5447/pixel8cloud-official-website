import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavModalComponent } from './modal/nav-modal/nav-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NavModalComponent, FooterComponent, HomeComponent, CoursesComponent, AnnouncementComponent, GalleryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
