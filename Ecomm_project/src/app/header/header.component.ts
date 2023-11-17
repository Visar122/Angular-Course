import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('myVariable') myVariableInput: ElementRef | undefined;

  title = 'Ecom-project';
  menuType = 'default';
  sellerName = '';
  searchResult: undefined | Product[];

  constructor(private route: Router, private product: ProductService) {}

  ngOnInit() {
    this.route.events.subscribe((value: any) => {
      console.warn(value);
      if (value.url) {

        if (localStorage.getItem('seller') && value.url.includes('seller')) {
           console.warn('this is seller area');
         
           let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.name;
          this.menuType = 'seller';
        } else {
          this.menuType = 'Default';
        }
    
      }
    
    });
  }

  isHomeRoute() {
    return (
      this.route.url.includes('') || this.route.url.includes('/home') || this.route.url.includes('/search') || this.route.url.includes('search/:query')
    );
  }

  focusSearchInput() {
    if (this.myVariableInput && this.myVariableInput.nativeElement) {
      this.myVariableInput.nativeElement.focus();
    }
  }

  clearSearchInput(myVariable: any) {
    return (myVariable.value = '');
  }

  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['home']);
  }

  Searchproduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      console.warn(element.value);

     

      this.product.Searchproduct(element.value).subscribe((result) => {
        this.searchResult = result;
        if (result.length > 5) {
          result.length = 5; // Limiting the number of displayed results to 5
        }
           // Reload the current page to clear the search results
         // This resets the route and triggers a page reload
      });
    }
  }

  hideSearch() {
    this.searchResult = undefined;
  }

  submitSearch(value: string) {
    console.warn(value);

    
    this.route.navigate([`search/${value}`]);
  }


  selectedProduct: Product | undefined;

  setSelectedProduct(product: Product) {
    this.selectedProduct = product;
    if (this.myVariableInput && this.myVariableInput.nativeElement) {
      this.myVariableInput.nativeElement.value = product.ProductName; // native element is what i type in browser to my search input
    }
  }

}