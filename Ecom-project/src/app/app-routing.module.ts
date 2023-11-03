import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { AddproductComponent } from './addproduct/addproduct.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"seller-auth",component:SellerAuthComponent},
  {path:'seller-home',canActivate:[AuthGuard],component:SellerHomeComponent,},
   {path:'seller-add-product',canActivate:[AuthGuard],component:AddproductComponent},//auth guard is so they can't just put the url link of the component and get acess to it without logging in
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
