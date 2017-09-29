import { Component } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  actionAlert(){
    console.log("cycle");
    $("#carouselExampleIndicators").carousel("cycle");
  }


  ngAfterViewInit(){
    console.log("hello");
    $('.your-class').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    })
  }

  ngAfterViewChecked() {
    //let self = this;
    //UIkit.alert(".nom").close();
  }
}
