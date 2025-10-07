'use strict';

const special = document.querySelector('.special');
const tag = document.querySelector('.tag');
const rect = special.getBoundingClientRect();

special.addEventListener('click', (event) => {
  tag.innerHTML = `
    client: ${event.clientX}, ${event.clientY} <br />
    page: ${event.pageX}, ${event.pageY} <br />
    `;
  console.log(rect);
});
