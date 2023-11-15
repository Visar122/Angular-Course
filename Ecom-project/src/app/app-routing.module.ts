import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ErrorComponent } from './error/error.component';
import { UpdateProductComponent } from './update-product/update-product.component';

export function getRoutes(): Routes {
  return [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "seller-auth", component: SellerAuthComponent },
    { path: 'seller-home', canActivate: [AuthGuard], component: SellerHomeComponent },
    { path: 'seller-add-product', canActivate: [AuthGuard], component: AddproductComponent },
    { path: "update-product/:id", component: UpdateProductComponent },
    { path: "**", component: ErrorComponent }
  ];
}

@NgModule({
  imports:[RouterModule.forRoot(getRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
