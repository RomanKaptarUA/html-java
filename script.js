// element.querySelector(selector);
// const item = document.querySelector('.list-item');
// const listItems = document.querySelectorAll('.list-item');
// console.log(listItems);

// const listWidth = 
// document.querySelector('#menu');
// listWidth.style.textTransform = 'uppercase';
// listWidth.style.fontSize = '26px';
// console.log(listWidth);

// document.parentNode('..');
// document.childNodes('..');

// document.children('..');

// document.firstChild('..');
// document.lastChild('..');

// document.firstElementChild('..');
// document.lastElementChild('..');

// document.previousSibling('..');
// document.nextSibling('..');

// const button = document.querySelector('.btn');
// button.style.backgroundColor = 'orange';
// button.style.color = 'white';
// console.log(button.style);




// const title = document.createElement('h1');
// console.log(title);

// title.textContent = 'Hello';
// console.log(title);

// const image = document.createElement('img');
// console.log(image);
// image.src = 'https://...';
// image.alt =  'cat';


const list = document.querySelector('.username');

const lastItem = document.createElement('li');
lastItem.textContent = 'Bob';
list.append(lastItem);

const firstItem = document.createElement('li');
firstItem.textContent = 'Alex';
list.prepend(firstItem);

const text = document.