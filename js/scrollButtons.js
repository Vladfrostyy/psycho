const scrollToAccrodeonButton = document.querySelector('.accordeonButton');
const accordeonSection = document.querySelector('.about')
const scrollToQRButtons = document.querySelectorAll('.QrButton');
const QRSection = document.querySelector('.pay')

scrollToAccrodeonButton.addEventListener('click', (e) => {
    e.preventDefault();
    accordeonSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'start' 
    });
})

scrollToQRButtons.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        QRSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest', 
            inline: 'start' 
        });
    })
})