import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { FavoritesPage } from '../favorites/favorites';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SearchPage;
  tab2Root: any = FavoritesPage;
  tab3Root: any = ContactPage;
  tab4Root: any = ContactPage;

  constructor() {

  }
}
