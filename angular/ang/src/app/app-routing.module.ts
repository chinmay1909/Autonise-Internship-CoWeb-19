import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RtpcrComponent } from './rtpcr/rtpcr.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { ProductsComponent } from './products/products.component';
import { InformationComponent } from './information/information.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path:'', redirectTo: 'home', pathMatch:'full'},
	{	path: 'home', component: HomeComponent},
	{	path: 'rtpcr', component: RtpcrComponent},
	{	path: 'vaccination', component: VaccinationComponent},
	{	path: 'products', component: ProductsComponent},
	{	path: 'information', component: InformationComponent},
	{	path: 'signup', component: SignupComponent},
	{	path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
