import initialPageLoad from './initial-pageload.js';
import setBackground from './background.js';
import createTabs from './tab-buttons.js';
import loadHome from './home-page.js';
import loadMenu from './menu-page.js';
import loadDailySpecials from './daily-specials-page.js';
import './styles.css';

setBackground();
createTabs();
initialPageLoad();
loadHome();

document.getElementById('home-btn').addEventListener('click', () => {
    loadHome();
});

document.getElementById('specials-btn').addEventListener('click', () => {
    loadDailySpecials();
});

document.getElementById('menu-btn').addEventListener('click', () => {
    loadMenu();
});