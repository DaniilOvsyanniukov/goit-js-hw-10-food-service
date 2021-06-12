import dishesCard from '../templates/dishesCard.hbs';
import menu from '../menu.json';

const refs = {
    menuList: document.querySelector('.js-menu'),
    lightToggle: document.querySelector('.theme-switch__toggle'),
    backgroundTheme: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function themeVarification() {
    if (localStorage.getItem('theme') === 'white' || localStorage.getItem('theme') === '')
    {
        refs.lightToggle.checked = false;
        return
    }
    else {
        refs.backgroundTheme.classList.add(Theme.DARK);
        localStorage.setItem('theme', 'black');
        refs.lightToggle.checked = true;
        return
    }
}

themeVarification();

refs.menuList.insertAdjacentHTML('beforeend', dishesCard(menu));

refs.lightToggle.addEventListener('change', function() {
    if (this.checked) {
        refs.backgroundTheme.classList.remove(Theme.LIGHT);
        refs.backgroundTheme.classList.add(Theme.DARK);
        localStorage.setItem('theme', 'black');
        return
    } else {
        refs.backgroundTheme.classList.remove(Theme.DARK);
        refs.backgroundTheme.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', 'white');
        return
  }
});
