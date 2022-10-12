export default function createContact() {
    const element = document.createElement('div');
    element.classList.add('contact-container');

    
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';
    const h2num = document.createElement('h2');
    h2num.textContent = 'Number: 11 9999-9999';
    const h2add = document.createElement('h2');
    h2add.textContent = 'Av. Lorem 42, Santos, Brasil';

    element.appendChild(h1);
    element.appendChild(h2num);
    element.appendChild(h2add);

    const imgdiv = document.createElement('div');
    imgdiv.classList.add('map-image')
    element.appendChild(imgdiv);

    return element
}