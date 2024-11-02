const menu = document.querySelectorAll('.navigation-link')
const sections = document.querySelectorAll('section')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            menu.forEach((link) => {
                if (link.getAttribute('href').replace('#', '') === entry.target.id) {
                    link.classList.add('active')
                } else {
                    link.classList.remove('active')
                }
            })
        }
    })
}, {
    threshold: 0.7
})

sections.forEach(
    (section) => observer.observe(section)
)

menu.forEach((e, i, a) => {
    e.addEventListener('click', (e) => {
        e.preventDefault()
        for (let i = 0; i < sections.length; i++) {
            if (e.target.getAttribute('href').replace('#', '') === sections[i].classList[0]) {
                sections[i].scrollIntoView({
                    block: 'start',
                    inline: 'nearest',
                    behavior: 'smooth'
                })
            }
        }
    })
})