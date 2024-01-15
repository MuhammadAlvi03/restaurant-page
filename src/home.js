import gappleImgSource from './assets/gapple2.png';
import menu from './menu';
import { getNavButtons } from './header';

export default function home() {
    const content = document.querySelector('#content');
    const home = document.createElement('div'); home.className = 'home';
    const restaurantName = document.createElement('img');  restaurantName.src = gappleImgSource; restaurantName.alt = 'The Golden Apple';
    const mainPara = document.createElement('p'); mainPara.textContent = 'Crafting flavors, one bite at a time';
    const bigMenuButton = document.createElement('button'); bigMenuButton.className = 'menu-button'; bigMenuButton.textContent = 'View Menu';
    bigMenuButton.addEventListener('click', () => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        menu();
        const [homeButton, menuButton, contactButton] = getNavButtons();
        homeButton.className = 'nav-button';
        menuButton.className = 'nav-button-active';
        contactButton.className = 'nav-button';
    })

    home.append(restaurantName, mainPara, bigMenuButton);
    content.appendChild(home);
}