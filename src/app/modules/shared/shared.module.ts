import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './links/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BannerComponent } from './links/banner/banner.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    HomeComponent, 
    AboutComponent, 
    BlogComponent, 
    ContactComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent
  ]
})
export class SharedModule { }
