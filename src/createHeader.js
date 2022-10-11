export default function createHeader() {
    const element = document.createElement('header');

    console.log('testt');
    const h1 = document.createElement('h1');
    h1.textContent = 'sushigato';
    
    const nav = document.createElement('nav');
    
    const button1 = document.createElement('button');
    button1.textContent = 'Home';
    nav.appendChild(button1);   
     
    const button2 = document.createElement('button');
    button2.textContent = 'Menu';
    nav.appendChild(button2);   
     
    const button3 = document.createElement('button');
    button3.textContent = 'Contact';
    nav.appendChild(button3);   

    element.appendChild(h1);
    element.appendChild(nav);

    return element
}





