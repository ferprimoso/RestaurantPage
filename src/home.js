export default function createMain() {
    const element = document.createElement('main');

    
    const h1 = document.createElement('h1');
    h1.classList.add('hero-quote');
    h1.textContent = 'Great sushi at afordable prices';

    const div = document.createElement('div');
    div.classList.add('hero-img');

    element.appendChild(h1);
    element.appendChild(div);


    return element
}
