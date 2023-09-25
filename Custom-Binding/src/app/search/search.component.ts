import { Component,EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  EnteredSearchValue:string= '';

  @Output()
  searchTextChanged:EventEmitter<string> =new EventEmitter <string>();

  OnSearchTextChanged(){
    this.searchTextChanged.emit(this.EnteredSearchValue); //We store the value that the user has entered inside EnteredSearchValue
  }
}
