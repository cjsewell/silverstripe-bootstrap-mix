import React from 'react';
import {render} from 'react-dom';
import ErrorBoundary from '../ErrorBoundary';
import Carousel from './Carousel';

export default Carousel;

export function renderCarousel(target) {
  const items = target?.dataset?.items && JSON.parse(target.dataset.items)
  render(
    <ErrorBoundary>
      <Carousel items={items}/>
    </ErrorBoundary>,
    target
  );
}
