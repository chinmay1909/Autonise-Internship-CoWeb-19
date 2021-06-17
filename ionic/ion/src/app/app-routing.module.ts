import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/home/home.component';
import {RtpcrComponent} from 'src/app/rtpcr/rtpcr.component';
import {VaccinationComponent} from 'src/app/vaccination/vaccination.component';
import {ProductsComponent} from 'src/app/products/products.component';
import {InformationComponent} from 'src/app/information/information.component';
import {SignupComponent} from 'src/app/signup/signup.component';
import {LoginComponent} from 'src/app/login/login.component';
const routes: Routes = [
	{ path:'', redirectTo: 'home', pathMatch:'full'},
	{	path: 'home', component: HomeComponent},
	{	path: 'rtpcr', component: RtpcrComponent},
	{	path: 'vaccination', component: VaccinationComponent},
	{	path: 'products', component: ProductsComponent},
	{	path: 'information', component: InformationComponent},
	{	path: 'signup', component: SignupComponent},
	{	path: 'login', component: LoginComponent},
  // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
];
@NgModule({
  imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
