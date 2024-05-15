import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.modules';
import { DetailsService } from './services/details.service';
import { NotFoundComponent } from './notfound/notfound.component';
import { HomeModule } from './Home/home.module';
import { ListingModule } from './listing/listing.module';
import { DetailsComponent } from './details/details.component';



@NgModule({
  // All the component and pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    NotFoundComponent
  ],
  // All modules
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      HomeModule,
      ListingModule
      // BrowserModule,
  ],
  // All the services
  providers: [
    DetailsService
  ],


  // only and only main component 
  bootstrap: [AppComponent]
})


export class AppModule { }

// router is just like a module 