import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ContactPage } from '../pages/contact/contact';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagesPage } from '../pages/messages/messages';
import { DetailPage } from '../pages/detail/detail';
import { DogService } from '../providers/dog.service';
import { RatingComponent } from '../components/rating/rating';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    ContactPage,
    DetailPage,
    SearchPage,
    MessagesPage,
    RatingComponent,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    ContactPage,
    DetailPage,
    SearchPage,
    MessagesPage,
    RatingComponent,
    TabsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DogService
  ]
})
export class AppModule {
}
