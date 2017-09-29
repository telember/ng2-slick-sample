import { Component } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  slides = [
    { caption: "The Piper at the Gates of Dawn" },
    { caption: "A Saucerful of Secrets" },
    { caption: "Music from the Film More" },
    { caption: "Ummagumma" },
    { caption: "Atom Heart Mother" },
    { caption: "Meddle" }
  ];
  // actionAlert(){
  //   console.log("cycle");
  //   $("#carouselExampleIndicators").carousel("cycle");
  // }


  // ngAfterViewInit(){
  //   console.log("hello");
  //   $('.slick-track').slick({
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 3
  //   })
  // }

  // ngAfterViewChecked() {
  //   //let self = this;
  //   //UIkit.alert(".nom").close();
  // }
}
