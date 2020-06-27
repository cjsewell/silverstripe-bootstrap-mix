import {renderCarousel} from '../jsx/Carousel';

[].forEach.call(document.querySelectorAll('#carousel-root'), target => {
  if (target) {
    renderCarousel(target);
    if (module.hot) {
      module.hot.accept();
    }
  }
});
