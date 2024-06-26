/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50
        ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    themeImage.src = selectedTheme === 'dark' ? 'assets/img/logo1.png' : 'assets/img/logo.png';
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

    themeImage.src = getCurrentTheme() === 'dark' ? 'assets/img/logo1.png' : 'assets/img/logo.png';
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    /* reset: true // Animations repeat */
})

sr.reveal(`.home__data, .list__container, .join__content, .footer__container`)
sr.reveal(`.home__img`, { origin: 'bottom' })
sr.reveal(`.health__image, .routine__images, .follow__img-3`, { origin: 'left' })
sr.reveal(`.health__data, .routine__data, .follow__img-4`, { origin: 'right' })
sr.reveal(`.follow__data, .follow__content-1 img`, { interval: 100 })





document.getElementById('startButton').addEventListener('click', startPractice);

function startPractice() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('practiceArea').style.display = 'block';
    startPose(1);
}

function startPose(poseNumber) {
    if (poseNumber > 5) {
        alert("Yoga practice completed!");
        return;
    }

    let getPositionMessage = document.getElementById('getPositionMessage');
    let waitTimer = document.getElementById('waitTimer');
    let pose = document.getElementById('pose' + poseNumber);
    let timer = document.getElementById('timer' + poseNumber);
    let waitTimeLeft = 10;
    let poseTimeLeft = 60;

    // Show "get in position" message
    getPositionMessage.style.display = 'block';
    waitTimer.textContent = waitTimeLeft;

    let waitInterval = setInterval(() => {
        waitTimeLeft--;
        waitTimer.textContent = waitTimeLeft;
        if (waitTimeLeft <= 0) {
            clearInterval(waitInterval);
            getPositionMessage.style.display = 'none';

            // Start pose timer
            pose.style.display = 'block';
            timer.textContent = poseTimeLeft;

            let poseInterval = setInterval(() => {
                poseTimeLeft--;
                timer.textContent = poseTimeLeft;
                if (poseTimeLeft <= 0) {
                    clearInterval(poseInterval);
                    pose.style.display = 'none';
                    startPose(poseNumber + 1);
                }
            }, 1000);
        }
    }, 1000);
}