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


// const list = document.querySelector('.username');

// const lastItem = document.createElement('li');
// lastItem.textContent = 'Bob';
// list.append(lastItem);

// const firstItem = document.createElement('li');
// firstItem.textContent = 'Alex';
// list.prepend(firstItem);

// const text = document.


// const title = document.querySelector('.article .title');
// title.innerHTML = 'New article title';




// const technologies = ['HTML', 'CSS', 'JavaSCript', 'React', 'Node'];
// const list = document.querySelector('list');

// const markup = technologies
// .map((technology) => `<li class='list item'>${technology}</li>`)
// .join('');

// console.log(markup);
// list.innerHTML = markup;

// list.insertAdjacentHTML("afterbegin", '<h3>New title</h3>');

// const saveButton = document.querySelector('button[data-action"save"]');
// console.log(saveButton.dataset.action);

// const closeButton = document.querySelector('button[data-action"close"]');
// console.log(closeButton.dataset.action);















//події

// const singleBtn = document.querySelector('#single');
// const handleClick = () => alert('Ассаламалейкум');
// singleBtn.addEventListener('click', handleClick);

// const multiBtn = document.querySelector('#multiple');
// const firstCall = () => alert('first callback');
// const secondCall = () => alert('second callback');
// const thirdCall = () => alert('third callback');
// multiBtn.addEventListener('click', firstCall);
// multiBtn.addEventListener('click', secondCall);
// multiBtn.addEventListener('click', thirdCall);


// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector('#btn');
// const handleClick = () => {
//     alert('Click event listener alert!');
// };

// addBtn.addEventListener('click', () => {
//  btn.addEventListener('click', handleClick);
// });

// removeBtn.addEventListener('click', () => {
//     btn.removeEventListener('click', handleClick);
//    });


// const btn = document.querySelector('#btn');
// const handleClick = event => {
//     console.log('event:', event);
//     console.log('event type:', event.type);
// }

// btn.addEventListener('click', handleClick);





// function changeColor(button) {
//     const colors = ['red', 'orange', 'green', 'blue'];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];

//     button.style.backgroundColor = randomColor;
// }

// function addAlert(){
//     alert('hello');
// }

















// події клавіатури

//клавіатура

// document.addEventListener("keydown", event => {
//     console.log("keydown", event);
// }
// )

// document.addEventListener("keyup", event => {
//     console.log("keyup", event);
// }
// )


// document.addEventListener("keydown", event => {
//     console.log('key:', event.key);
//     console.log('code:', event.code);
// })


// document.addEventListener("keydown", event => {
//     event.preventDefault();

//     if((event.ctrlKey || event.altKey) && event.code === "KeyS"); {
//         console.log("ctrl+s or command+s");
//     }
// })

//мишка
 
//MOUSEDOWN-UP


// const element = document.getElementById('mousedown-up');

// element.addEventListener('mousedown', () => {
//     element.textContent = 'Кнопка миші натиснута';
// });

// element.addEventListener('mouseup', () => {
//     element.textContent = 'Кнопка миші відпущена';
// });


//MOUSEOVER-OUT


// const element = document.getElementById('mouseover-out');
// element.addEventListener('mouseover', () => {
//     element.textContent = 'Курсор над елементом';
// });

// element.addEventListener('mouseout', () => {
// element.textContent = "Курсор вийшов з елемента"
// });

// const element = document.getElementById('mousemove');
// element.addEventListener('mousemove', (e) => {
//     element.textContent = `Координати миші: X=${e.clientX}, Y=${e.clientY}`;
// });






// Написати програму яка буде за допомогою миші рухати блок на екрані.
//  Цей код повинен прослуховати подію mousemove на документі та рухати блок на відстань,
//   яку миша змістилася відносно центру блоку. Якщо вам потрібно рухати саме центр блоку,
//    ви можете додати до відстані половину ширини та висоти блоку.






const block = document.querySelector('.block');
document.addEventListener('mousemove', e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const width = block.offsetWidth;
    const height = block.offsetHeight;
    const newBlockX = mouseX - width / 2;
    const newBlockY = mouseY - height / 2;
    block.style.left = `${newBlockX}px`;
    block.style.top = `${newBlockY}px`;
 });

 document.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    block.style.backgroundColor = randomColor;
 })
