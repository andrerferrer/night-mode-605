// select the element
const btn = document.querySelector('button');
// add event listener
btn.addEventListener('click', (event) => {
  // implement the callback
  document.querySelector('body')
          .classList
          .toggle('bg-dark');
})