// SIDEBAR
/** add active class for each menu item when it is clicked */
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotifiacation = document.querySelector('#messages-notifications');

// RIGHT
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

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
/** Hightlight messages card when messages menu item is clicked */
messagesNotifiacation.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifiacation.querySelector('.notification-count').
        style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

const searchMessage = () => {
    // grap the value from the message seach bar
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);


// ======================== THEME/DISPLAY CUSTOMIZATION ========================
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);
