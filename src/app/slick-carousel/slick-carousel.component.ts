import { Component, OnInit, ElementRef, Directive, Host, NgZone, Input } from '@angular/core';
declare const $: any;

@Component({
  selector: 'slick-carousel',
  template: `<ng-content></ng-content>`
})
export class SlickCarouselComponent implements OnInit {
  @Input() option: {}
  $carousel: any;

  constructor(private el: ElementRef, private zone: NgZone) { }

  ngOnInit() {
  }
  initialized = false;

  initCarousel() {
    this.zone.runOutsideAngular(() => {
      this.$carousel = $(this.el.nativeElement).slick(this.option);
    });
    this.initialized = true;
  }

  addSlide(slide) {
    !this.initialized && this.initCarousel();
    this.$carousel.slick('slickAdd', slide.el.nativeElement);
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
}
