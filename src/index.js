import 'normalize.css'
import './style.css';
import createHeader from './createHeader';
import createMain from './home';
import clearContent from './clearContent';

// create content div

const content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);



// header

document.querySelector('.content').appendChild(createHeader());

//button event listener

const nav = document.querySelector('nav')

nav.childNodes[0].addEventListener('click', () => clearContent());
nav.childNodes[1].addEventListener('click', () => console.log('hi'));
nav.childNodes[2].addEventListener('click', () => console.log('hi'));







//main content
document.querySelector('.content').appendChild(createMain());


