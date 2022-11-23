// SIDEBAR
/** add active class for each menu item when it is clicked */
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotifiacation = document.querySelector('#messages-notifications');

// RIGHT
const messages = document.querySelector('.messages');

// ======================== SIDEBAR ========================
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


// ======================== MESSAGES ========================
messagesNotifiacation.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifiacation.querySelector('.notification-count').
        style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})
