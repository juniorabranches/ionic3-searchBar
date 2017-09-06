import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavController, Searchbar } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('searchbar', { read: ElementRef }) searchbarRef: ElementRef;
  @ViewChild('searchbar') searchbarElement: Searchbar;
  search: boolean    = false;
  queryText: string;
  constructor(public navCtrl: NavController) {

  }

  toggleSearch() {
    if (this.search) {
      this.search = false;
    } else {
      this.search = true;
      this.searchbarElement.setFocus();
    }
  }

  searchAction(texto: any) {
    let val = texto.target.value;
    //implement search
  }

}
