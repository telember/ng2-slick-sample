import { Component, OnInit, ElementRef, Directive, Host, NgZone } from '@angular/core';
declare const $: any;
//import 'slick-carousel';

@Component({
  selector: 'slick-carousel',
  template: `<ng-content></ng-content>`
})
export class SlickCarouselComponent implements OnInit {

  constructor(private el: ElementRef, private zone: NgZone) { }

  slides = [];
  $carousel: any;
  ngOnInit() {
  }

  initialized = false;

  initCarousel() {
    this.zone.runOutsideAngular(() => {
      this.$carousel = $(this.el.nativeElement).slick({});
    });
    this.initialized = true;
  }

  addSlide(slide) {
    console.log("addSlide");
    !this.initialized && this.initCarousel();
    this.slides.push(slide);
    this.$carousel.slick('slickAdd', slide.el.nativeElement);
  }

  removeSlide(slide) {
    const idx = this.slides.indexOf(slide);
    this.$carousel.slick('slickRemove', idx);
    this.slides = this.slides.filter(s => s != slide);
  }
}

@Directive({
  selector: '[slick-carousel-item]',
})
export class SlickCarouselItem {
  constructor(private el: ElementRef, @Host() private carousel: SlickCarouselComponent) {
  }
  ngAfterViewInit() {
    this.carousel.addSlide(this);
  }
  ngOnDestroy() {
    this.carousel.removeSlide(this);
  }
}
