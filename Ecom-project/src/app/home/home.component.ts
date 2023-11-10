import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     popularProducts:undefined|Product[];
     
  constructor(private product:ProductService){}

  ngOnInit(){
    
    this.product.PopularProducts().subscribe((products)=>{
      this.popularProducts=products;
      
    

    })
  }

  

}
