import './style.css';
import initPage from './init';
import header, { getNavButtons } from './header';
import home from './home';
import menu from './menu';
import contact from './contact';


initPage();

const content = document.querySelector('#content');
const [homeButton, menuButton, contactButton] = getNavButtons();
homeButton.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    homeButton.className = 'nav-button-active';
    menuButton.className = 'nav-button';
    contactButton.className = 'nav-button';
    home();
})

menuButton.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    homeButton.className = 'nav-button';
    menuButton.className = 'nav-button-active';
    contactButton.className = 'nav-button';
    menu();
})

contactButton.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    homeButton.className = 'nav-button';
    menuButton.className = 'nav-button';
    contactButton.className = 'nav-button-active';
    contact();
})