import 'normalize.css'
import './style.css';
import createHeader from './createHeader';
import createMain from './home';
import clearContent from './clearContent';
import createContact from './contact';
import createMenu from './menu';

// create content div

const content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);

const contentContainer = document.querySelector('.content');

// header

document.querySelector('.content').appendChild(createHeader());

//button event listener

const nav = document.querySelector('nav')

nav.childNodes[0].addEventListener('click', function(){clearContent(); document.querySelector('.content').appendChild(createMain())});
nav.childNodes[1].addEventListener('click', function(){clearContent(); document.querySelector('.content').appendChild(createMenu())});
nav.childNodes[2].addEventListener('click', function(){clearContent(); document.querySelector('.content').appendChild(createContact())});

//main content
document.querySelector('.content').appendChild(createMain());


