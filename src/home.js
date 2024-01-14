import gappleImgSource from './assets/gapple2.png';

export default function home() {
    const content = document.querySelector('#content');
    const home = document.createElement('div'); home.className = 'home';
    const restaurantName = document.createElement('img');  restaurantName.src = gappleImgSource; restaurantName.alt = 'The Golden Apple';
    const mainPara = document.createElement('p'); mainPara.textContent = 'Crafting flavors, one bite at a time';
    const bigMenuButton = document.createElement('button'); bigMenuButton.className = 'menu-button'; bigMenuButton.textContent = 'View Menu';

    home.append(restaurantName, mainPara, bigMenuButton);
    content.appendChild(home);
}