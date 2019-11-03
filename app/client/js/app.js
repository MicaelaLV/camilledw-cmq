import 'babel-polyfill'; // Webpack needs
import '../scss/application.scss'; // Sass connection

import AOS from 'aos';

// /////////////////// HELPERS ///////////////////////////
// ///////////////////////////////////////////////////////
// import Device           from './helpers/Device';
// import Scroller         from './helpers/Scroller';
// import HandyFunctions   from './helpers/HandyFunctions';
import States from './helpers/StatesMachine';
import Parser from './helpers/Parser';

// ////////////////// COMPONENTS ////////////////////////
// ///////////////////////////////////////////////////////
// import AccordionTrigger       from './components/AccordionTrigger';
// import ButtonScrollTo         from './components/ButtonScrollTo';
// import CircleImageTrigger     from './components/CircleImageTrigger';
// import Counter                from './components/Counter';
// import Dropdown               from './components/Dropdown';
// import Form                   from './components/Form';
// import InputEmail             from './components/InputEmail';
// import InputSelect            from './components/InputSelect';
// import ModalTrigger           from './components/ModalTrigger';
// import Navbar                 from './components/Navbar';
// import Parallax               from './components/Parallax';
// import RandomImage            from './components/RandomImage';
// import SliderFeatured         from './components/SliderFeatured';
// import SliderVertical         from './components/SliderVertical';
// import Video                  from './components/Video';
import SliderTabs from './components/SliderTabs';

// /////////////////// CONSTRUCTOR ///////////////////////
// ///////////////////////////////////////////////////////
class Project {
  constructor() {
    // this.device     = new Device();
    this.states = new States();
    this.parser = new Parser();
    this.components = {};
  }
}

AOS.init({ offset: 300 });

document.addEventListener('DOMContentLoaded', () => {
  window.app = new Project();

  // //////////////// ADDING COMPONENTS ////////////////////
  // //////////////////////////////////////////////////////
  // app.components.accordionTrigger   = new AccordionTrigger('cmp-accordion-trigger');
  // app.components.buttonScrollTo     = new ButtonScrollTo('cmp-btn-scroll-to');
  // app.components.form               = new Form('cmp-form');
  // app.components.circleImageTrigger = new CircleImageTrigger('cmp-circle-image-trigger');
  // app.components.counter            = new Counter('cmp-counter');
  // app.components.dropdown           = new Dropdown('cmp-dropdown');
  // app.components.inputEmail         = new InputEmail('cmp-input-email');
  // app.components.inputSelect        = new InputSelect('cmp-input-select');
  // app.components.modalTrigger       = new ModalTrigger('cmp-modal-trigger');
  // app.components.navbar             = new Navbar();
  // app.components.randomImage        = new RandomImage('cmp-random-image');
  // app.components.parallax           = new Parallax('cmp-parallax');
  // app.components.sliderFeatured     = new SliderFeatured('cmp-slider-featured');
  // app.components.sliderVertical     = new SliderVertical('cmp-slider-vertical');
  // app.components.video              = new Video('cmp-video');
  app.components.sliderTabs = new SliderTabs('cmp-slider-tabs');

  //           Fade in page content        \\
  // ______________________________________//
  // const body = document.body;

  window.setTimeout(() => {
    // body.classList.add('loaded');
    console.log(
      '%cWEBPACK PROJECT IS RUNNING',
      'background: #00FF7F; color: white; padding: 10px;'
    );
  }, 200);
});
