import backgroundImg from './imgs/low-carb-summer-bbq.jpeg';

export default function setBackground(){
    const backgroundDiv = document.createElement('div');
    backgroundDiv.className = 'background-div';
    const backgroundImage = document.createElement('img');
    // backgroundImage.src = '../src/imgs/low-carb-summer-bbq.jpeg';
    backgroundImage.src = backgroundImg;
    backgroundImage.className = 'background-image';
    backgroundDiv.appendChild(backgroundImage);
    document.body.appendChild(backgroundDiv);
}

