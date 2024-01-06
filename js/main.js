const tl = gsap.timeline();

tl.fromTo('.header',
{
    y: -100,
    opacity: 0
},
{
    y: 0,
    opacity: 1,
    duration: 1.5,

},
0.1
).fromTo('.marquee', 
    {
        x: -1000, 
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1.5,
    },
    0.1
).fromTo('.chess__collage',
    {
        y: 100,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        duration: 1.5,

    },
    0.1
).fromTo('.slogan__block',
{
    x: -100,
    opacity: 0
},
{
    x: 0,
    opacity: 1,
    duration: 1.5,

},
0.1
).fromTo('.second__marquee',
{
    x: 200,
    opacity: 0
},
{
    x: 0,
    opacity: 1,
    duration: 1.5,

},
0.1
);

gsap.from('.about-text', {
    scrollTrigger: {
        trigger:'.about',
        start: "-30% center",
        end: "+=300px",
        scrub: true
    },
    scale: .4,
    transformOrigin: 'left center',
    ease: 'none',
    stagger: 1,
})

gsap.from('.prices__ttl', {
    scrollTrigger: {
        trigger:'.prices__block',
        start: "-50% center",
        end: "+=300px",
        scrub: true
    },
    scale: .1,
    transformOrigin: 'top center',
    ease: 'none',
    stagger: 1,
})
gsap.from('.prices__block_container', {
    scrollTrigger: {
        trigger:'.prices__block',
        start: "-50% center",
        end: "+=300px",
        scrub: true
    },
    scale: .1,
    transformOrigin: 'top center',
    ease: 'none',
    stagger: 1,
})
gsap.from('.method__ttl', {
    scrollTrigger: {
        trigger:'.method',
        start: "-50% center",
        end: "+=300px",
        scrub: true
    },
    scale: .1,
    transformOrigin: 'left',
    ease: 'none',
    stagger: 1,
})
gsap.from('.methods-container', {
    scrollTrigger: {
        trigger:'.method',
        start: "-50% center",
        end: "+=300px",
        scrub: true
    },
    scale: .1,
    transformOrigin: 'right',
    ease: 'none',
    stagger: 1,
})
gsap.from('.carousel', {
    scrollTrigger: {
        trigger:'.services',
        start: "-30% center",
        end: "+=300px",
        scrub: true
    },
    scale: .4,
    transformOrigin: 'right center',
    ease: 'none',
    stagger: 1,
})
gsap.from('.services__text', {
    scrollTrigger: {
        trigger:'.services',
        start: "-30% center",
        end: "+=300px",
        scrub: true
    },
    scale: .4,
    transformOrigin: 'left center',
    ease: 'none',
    stagger: 1,
})
gsap.from('.register__ttl', {
    scrollTrigger: {
        trigger:'.register',
        start: "-300 0",
    },
    y: 150,
    autoAlpha: 0,
    duration: 1,
})
gsap.from('.register__left', {
    scrollTrigger: {
        trigger:'.register',
        start: "-300 0",
    },
    y: 150,
    autoAlpha: 0,
    duration: 1.3,
})
gsap.from('.register__right', {
    scrollTrigger: {
        trigger:'.register',
        start: "-300 0",
    },
    y: 150,
    autoAlpha: 0,
    duration: 1.5,
})


let sideMenu = document.getElementById('sideMenu')

const openMenu = () => {
    sideMenu.style.right = `0px`;
}


const closeMenu = () => {
    sideMenu.style.right = `-200px`;
}


const openAccordion = () => {
    let accordItem = document.getElementById()
}

const openTab = (tabname) => {
    let tabLinks = document.getElementsByClassName('tab-link')
    let tabContents = document.getElementsByClassName('tab-contents')
    for(tabLink of tabLinks) {
        tabLink.classList.remove('active-link') 
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove('active-tab') 
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}

let nameError = document.getElementById('nameError');
let phoneError = document.getElementById('phoneError');
let submitError = document.getElementById('submitError');

const validateName = () => {
    let name = document.getElementById('contactName').value;
    if (name.length === 0 || !name.match(/^[А-ЯЁа-яё]/) || name.length < 2) {
        nameError.innerHTML = 'Введите Ваше имя!';
        nameError.classList.add('text-danger')
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check position-absolute"></i>';
    nameError.classList.add('text-success')
    nameError.classList.remove('text-danger')
    return true;
}

const validatePhone = () => {
    let phone = document.getElementById('contactPhone').value

    if (phone.length === 0) {
        phoneError.innerHTML = 'Введите Ваш номер!'
        phoneError.classList.remove('text-success')
        phoneError.classList.add('text-danger')
        return false
    }
    if (phone.length != 11) {
        phoneError.classList.remove('text-success')
        phoneError.classList.add('text-danger')
        phoneError.innerHTML = 'Введите корректный номер!'
        return false
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'Только цифры!'
        phoneError.classList.add('text-danger')
        phoneError.classList.remove('text-success')
        return false
    }
    phoneError.classList.remove('text-danger')
    phoneError.classList.add('text-success')
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check position-absolute"></i>';
    return true;
}



function validateForm() {
    if (!validateName() || !validatePhone()) {
        submitError.style.display = 'block';
        submitError.classList.add("text-danger")
        submitError.innerHTML = 'Заполните форму корректно!'
        setTimeout(()=>{submitError.style.display = 'none'}, 3000)
        return false
    }
    return true
}
console.log('sex')
const scriptURL = 'https://script.google.com/macros/s/AKfycbyeVHkdp7OdrvAaZ9XGXjJ_IGl8Zn3ipFhEl38fi-8FPupq5kyWPMMnpEpcIdAVH-Or/exec'
const form = document.forms['submit-to-google-sheet']
const submitBtn = document.getElementById('submitBtn')

form.addEventListener('submit', e => {
    e.preventDefault()
    if (validateForm()) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            submitError.classList.remove("text-danger")
            submitError.classList.add("text-success")
            submitError.innerHTML = 'Ваша заявка успешно отправлена!'
            submitBtn.style.background = '#EDC73E'
            submitBtn.classList.remove('subscribe')
            submitBtn.classList.add('subscribed')
            submitBtn.lastChild.style.color = "#131313 !important"
            submitBtn.lastChild.innerHTML = 'Вы записаны!'
            setTimeout(() => {
                submitError.innerHTML = ''
            }, 5000);
            form.reset()
            nameError.innerHTML = ''
            phoneError.innerHTML = ''
        })
        .catch(error => {
            submitError.classList.add('text-danger')
            submitError.innerHTML = 'Не удалось записаться, попробуйте позже!'
        })
    }
})


