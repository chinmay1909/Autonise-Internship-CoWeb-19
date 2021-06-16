import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RtpcrComponent } from './rtpcr/rtpcr.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { ProductsComponent } from './products/products.component';
import { InformationComponent } from './information/information.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RtpcrComponent,
    VaccinationComponent,
    ProductsComponent,
    InformationComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
