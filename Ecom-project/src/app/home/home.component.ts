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
     currentIndex=0;
     
  constructor(private product:ProductService){}

  ngOnInit(){
    
    this.product.PopularProducts().subscribe((products)=>{
      this.popularProducts=products; //this.popularProducts = products;: This line assigns the received products to the popularProducts property.



  
    });
  }


    }
  