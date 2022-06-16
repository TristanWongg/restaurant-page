import initialPageLoad from './initial-pageload.js';
import loadContact from './contact-page.js';
import loadMenu from './menu-page.js';
import createTabs from './tab-buttons.js';

createTabs();
initialPageLoad();


document.getElementById('home-btn').addEventListener('click', () => {
    initialPageLoad();
});


document.getElementById('menu-btn').addEventListener('click', () => {
    loadMenu();
});


document.getElementById('contact-btn').addEventListener('click', () => {
    loadContact();
});