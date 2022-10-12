import createCard from "./createCard";

export default function createMenu() {
    const element = document.createElement('div');
    element.classList.add('menu-container');

    
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    element.appendChild(h1);

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    menuGrid.appendChild(createCard());
    menuGrid.appendChild(createCard());
    menuGrid.appendChild(createCard());
    menuGrid.appendChild(createCard());
    menuGrid.appendChild(createCard());
    menuGrid.appendChild(createCard());


    element.appendChild(menuGrid);

    return element
}