export default function createCard() {
    const div = document.createElement('div');
    div.classList.add('card');

    const cardLabel = document.createElement('div');
    cardLabel.classList.add('card-label');
    const p = document.createElement('p');
    p.textContent = 'Sashimi';
    cardLabel.appendChild(p);   


    div.appendChild(cardLabel);
    
    return div
}