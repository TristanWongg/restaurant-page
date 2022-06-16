export default function createTabs(){
    const headerDiv = document.getElementById('header');
    const btnsDiv = document.createElement('div');
    btnsDiv.className = 'btns-div';

    const title = document.createElement('h1');
    title.textContent = "Tristan's Backyard BBQ";

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'HOME';
    homeBtn.id = 'home-btn';

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "MENU";
    menuBtn.id = 'menu-btn';

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'CONTACT';
    contactBtn.id = 'contact-btn';

    btnsDiv.appendChild(homeBtn);
    btnsDiv.appendChild(menuBtn);
    btnsDiv.appendChild(contactBtn);

    headerDiv.appendChild(title);
    headerDiv.appendChild(btnsDiv);
}
