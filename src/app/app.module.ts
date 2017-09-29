import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SlickCarouselComponent, SlickCarouselItem } from './slick-carousel/slick-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    SlickCarouselComponent,
    SlickCarouselItem
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
