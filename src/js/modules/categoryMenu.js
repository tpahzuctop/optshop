// show/hide mobile category menu

const mobileСategoryShowBtn = document.querySelector('.mobile-user-panel__category-btn');
const mobileCategoryMenu = document.querySelector('.mobile-category');

mobileСategoryShowBtn.addEventListener('click', function (e) {
    e.preventDefault();
    mobileCategoryMenu.classList.toggle('mobile-category--active');
})