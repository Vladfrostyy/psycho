const popupButton = document.querySelector('.popupButton');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__content');

popupButton.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('active');
})

document.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.classList.remove('active');
    }
})