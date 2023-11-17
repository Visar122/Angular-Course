import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
    
  searchproduct:undefined|Product[];

  constructor(private product:ProductService,private ActiveRoute:ActivatedRoute){}

  ngOnInit(){
    let query=this.ActiveRoute.snapshot.paramMap.get('query'); //the name in routing is also query the path which allows u to search anything

    query && this.product.Searchproduct(query).subscribe((result)=>{
    this.searchproduct=result;      // query&& is so  ('query') is not null so  the link is not http://localhost:4200/search/
    })
  }

}
