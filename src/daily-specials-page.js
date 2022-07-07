import bigCombo from './imgs/big-combo.jpeg';
import combo from './imgs/combo.jpeg';
import cornbread from './imgs/cornbread.jpeg';
import pulledSandwich from './imgs/pulled-sandwich.jpeg';
import ribs from './imgs/ribs.jpg';
import sausages from './imgs/sausages.jpg';
import wings from './imgs/wings.jpg';

export default function loadDailySpecials(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const specialDiv = document.createElement('div');
    specialDiv.className = 'specials-content';

    const cardDetails =[
        {
        day: 'MONDAY',
        img: Object.assign(new Image, {
            // src: "../src/imgs/ribs.jpg",
            src: ribs,
        }),
        description: "BUY 2 LB RIBS OR BRISKET AND GET FREE DRINK"
        },
        {
        day: 'TUESDAY',
        img: Object.assign(new Image, {
            // src: "../src/imgs/pulled-sandwich.jpeg",
            src: pulledSandwich,
        }),
        description: "50% OFF SANDWICHES"
        },
        {
        day: 'WEDNESDAY',
        img: Object.assign(new Image, {
            // src: "../src/imgs/cornbread.jpeg",
            src: cornbread,
        }),
        description: "GET A FREE ORDER OF CORNBREAD WITH ANY ORDER OVER $20"
        },
        {
        day: 'THURSDAY',
        img: Object.assign(new Image, {
            // src: "../src/imgs/sausages.jpg",
            src: sausages,
        }),
        description: "50% OFF SAUSAGES"
        },
        {
        day: 'FRIDAY',
        img: Object.assign(new Image, {
            // src: "../src/imgs/wings.jpg",
            src: wings,
        }),
        description: "50% OFF WINGS COMBO"
        },
        {
        day: 'SATURDAY',
        img: Object.assign(new Image, {
            // src: "../src/imgs/combo.jpeg",
            src: combo,
        }),
        description: "MIX AND MATCH: CHOOSE ANY SANDWICH, SIDE, AND DRINK FOR $20"
        },
        {
        day: 'SUNDAY',
        img: Object.assign(new Image, {
            // src: "../src/imgs/big-combo.jpeg",
            src: bigCombo,
        }),
        description: "20% OFF ANY COMBO"
        },
    ];

    const cardsDiv = document.createElement('div');
    cardsDiv.className = 'card-container';
    specialDiv.appendChild(cardsDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'special-description';
    specialDiv.appendChild(descriptionDiv);

    const descriptionText = document.createElement('h2');
    descriptionText.className = 'special-description-text';
    descriptionDiv.appendChild(descriptionText);

    const descriptionImg = document.createElement('img');
    descriptionImg.className = 'special-description-img';
    descriptionDiv.appendChild(descriptionImg);

    for (let i=0; i<7; i++){
        const card = document.createElement('div');
        card.className = 'card';
        const day = document.createElement('h2');
        day.textContent = cardDetails[i].day;

        card.appendChild(day);
        cardsDiv.appendChild(card);

        card.addEventListener('click', () => {
            descriptionDiv.innerHTML = '';
            descriptionDiv.style.display = 'flex';
            descriptionText.textContent = cardDetails[i].day + ' - ' + cardDetails[i].description;
            descriptionImg.src = cardDetails[i].img.src;
            descriptionDiv.appendChild(descriptionText);
            descriptionDiv.appendChild(descriptionImg);
        });
    }
    contentDiv.appendChild(specialDiv);
}