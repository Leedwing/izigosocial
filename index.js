// ======================== SIDEBAR ========================
/** add active class for each menu item when it is clicked */
const menuItems = document.querySelectorAll('.menu-item');

/** function to remove active class from all menu items */
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active')
        const notificationPopup = document.querySelector('.notification-popup');
        if (item.id != 'notifications') {
            notificationPopup.style.display = 'none';
        } else {
            notificationPopup.style.display = 'block';
            document.querySelector('#notifications .notification-count')
                .style.display = 'none';
        }
    })
})