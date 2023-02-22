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


    const mobileСategoryShowBtn = document.getElementById('mobile-menu-btn');
    const mobileCategoryMenu = document.getElementById('header-mobile-menu');
        mobileСategoryShowBtn.addEventListener('click', function () {
        mobileCategoryMenu.classList.toggle('header-mobile__menu-wrapper--active');
    })


//show/hide desktop category menu

    const desktopСategoryShowBtn = document.getElementById('header-desktop-menu-btn');
    const desktopCategoryMenu = document.getElementById('header-desktop-menu');

    desktopСategoryShowBtn.addEventListener('click', function () {
        desktopCategoryMenu.classList.toggle('header-desktop__menu-wrapper--active');
        desktopСategoryShowBtn.classList.toggle('header-desktop__category-btn--active');
    })
}