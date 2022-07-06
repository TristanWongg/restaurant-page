export default function createTabs(){
    const containerDiv = document.getElementById('container');

    const btnsDiv = document.createElement('div');
    btnsDiv.className = 'btns';

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'HOME';
    homeBtn.id = 'home-btn';

    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'DAILY SPECIALS';
    aboutBtn.id = 'specials-btn';

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "MENU";
    menuBtn.id = 'menu-btn';

    btnsDiv.appendChild(homeBtn);
    btnsDiv.appendChild(aboutBtn);
    btnsDiv.appendChild(menuBtn);

    containerDiv.appendChild(btnsDiv);
}
