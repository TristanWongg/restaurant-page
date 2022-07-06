export default function loadHome(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const homeDiv = document.createElement('div');
    homeDiv.className = 'home-content';

    const text1 = document.createElement('h1');
    text1.textContent = "Big Boys Barbecue";

    homeDiv.appendChild(text1);
    contentDiv.appendChild(homeDiv);
}