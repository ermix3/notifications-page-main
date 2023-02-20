const notificationCounter = document.querySelector('.notificationCounter');
const markAllRead = document.querySelector('.markAllRead');

markAllRead.addEventListener('click', () => {
    const unreadNotifications = document.querySelectorAll('.unread');
    unreadNotifications.forEach((notification) => {
        notification.classList.remove('unread');
    });
    notificationCounter.innerText = 0;
});
