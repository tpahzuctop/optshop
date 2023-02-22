export function isWebp() {
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        }
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function categoryMenu() {
// show/hide mobile category menu
    const mobileСategoryShowBtn = document.querySelector('.mobile-user-panel__category-btn');
    const mobileCategoryMenu = document.querySelector('.header-mobile__menu-wrapper');

    mobileСategoryShowBtn.addEventListener('click', function (e) {
        e.preventDefault();
        mobileCategoryMenu.classList.toggle('header-mobile__menu-wrapper--active');
    })

// show/hide desktop category menu

    const desktopСategoryShowBtn = document.querySelector('.header-desktop__category-btn');
    const desktopCategoryMenu = document.querySelector('.header-desktop__menu-wrapper');

    desktopСategoryShowBtn.addEventListener('click', function (e) {
        e.preventDefault();
        desktopCategoryMenu.classList.toggle('header-desktop__menu-wrapper--active');
    })
}