'use strict';

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
  const action = e.target.dataset.action;
  if (!action) return;

  switch (action) {
    case 'scroll-by':
      scrollBy(0, 100);
      break;
    case 'scroll-to':
      scrollTo(0, 100);
      break;
    case 'scroll-into':
      special.scrollIntoView({ block: 'center' });
      break;
  }
});
