import breadImgSrc from './assets/mcbread.png';
import steakImgSrc from './assets/mcsteak2.png';
import cakeImgSrc from './assets/mccake2.png';

export default function menu() {
    const content = document.querySelector('#content');
    const menuContainer = document.createElement('div'); menuContainer.className = 'menu';

    const menuImgSrcArr = [breadImgSrc, steakImgSrc, cakeImgSrc];
    const menuImgAltArr = ['Bread', 'Steak', 'Cake'];
    const menuItemTextArr = ['In-house crafted bread, made fresh daily from our local wheat farm','Freshly grilled steak, with our pixel-perfect seasoning','Iconic block-style cake, 100% locally sourced ingredients'];
    
    let menuItems = [];
    for (let i = 0; i < 3; i++) {
        let menuItem = document.createElement('div'); menuItem.className = 'menu-item';
        let menuImgContainer = document.createElement('div'); menuImgContainer.className = 'menu-image';
        let menuImg = document.createElement('img'); menuImg.src = menuImgSrcArr[i];
        menuImg.alt = menuImgAltArr[i];
        menuImgContainer.appendChild(menuImg);

        let menuItemTextContainer = document.createElement('div'); menuItemTextContainer.className = 'menu-text';
        let menuItemText = document.createElement('div'); menuItemText.className = 'menu-sign'; menuItemText.style = '--scale:2';
        menuItemText.textContent = menuItemTextArr[i];
        
        menuItemTextContainer.appendChild(menuItemText);
        menuItem.append(menuImgContainer, menuItemTextContainer);
        menuContainer.appendChild(menuItem);

        menuItems.push(menuItem);
    }

    content.appendChild(menuContainer);
}