import BaseComponent from './BaseComponent';
import Swiper        from 'swiper';
import { throttle }  from 'lodash';


class SliderTabs extends BaseComponent {
  constructor(componentName, autoInit = true){
    super(componentName);

    this.options = {
      wrapperClass: 'slides-list',
      slideClass: 'slide',
      centeredSlides: false,
      watchSlidesVisibility: true,
      slidesPerView: 'auto',  // Default slides per view
      spaceBetween: 20,
      loop: false,
      navigation: {
        prevEl: '.slider__btn--prev',
        nextEl: '.slider__btn--next'
      },
      pagination: {
        el: '.EMPTY',
        clickable: true,
      },
      speed: 300,
      watchOverflow: true,
      on: {
        init: function () {
          // console.log('swiper initialized for tabs buttons');
        },
      }
    };

    this.isEnabled;
    this.classElement = `.${componentName}`;
  }


  init(component) {
    // scrollWidth to take in count the overflow slides
    // + 40 to give it more margin and avoid super close elements
    const breakpoint = component.element.scrollWidth + 10;
    this.pageWidth = window.matchMedia(`(min-width: ${breakpoint}px)`);

    // if (!this.pageWidth.matches || app.device.device == 'mobile') {
    //   this.slider = new Swiper(this.classElement, this.options);
    //   component.element.classList.add('slider-active');
    //   this.isEnabled = true;
    // }

    this.addCustomEvents(component.element);
  }


  update(element) {
    // if (!this.pageWidth.matches || app.device.device == 'mobile') {
    //   this.slider = new Swiper(this.classElement, this.options);
    //   element.classList.add('slider-active');
    //   this.isEnabled = true;
    // }
  }


  addCustomEvents(element) {
    window.addEventListener('resize', _.throttle((e) => {
      if (this.pageWidth.matches) {
        if (!!this.slider) {
          // WARNING ERROR CHECK LIBRARY DESTROY METHOD UPDATE
          // this.slider.destroy(true, true);
          this.slider = undefined;
          element.classList.remove('slider-active');
          this.isEnabled = false;
        }
        return;
      } else {
        if (!this.isEnabled) {
          this.update(element);
        }
      }
    }, 500));

  }

}

export default SliderTabs;
