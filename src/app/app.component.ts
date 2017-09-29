import { Component } from '@angular/core';

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

  constructor() {
  }

  slideOption() {
    return {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
      autoplay: true,
      autoplaySpeed: 2000
    }
  }
}
