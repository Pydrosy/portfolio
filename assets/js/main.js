/*=============== ANIME JS SPLIT TEXT HOME ===================*/
// Split text into spans for animation
function splitText(selector) {
  const element = document.querySelector(selector);
  element.innerHTML = element.textContent
    .split('')
    .map(char => `<span>${char}</span>`)
    .join('');
}

splitText('.home__profession-1');
splitText('.home__profession-2');

const chars1 = document.querySelectorAll('.home__profession-1 span');
const chars2 = document.querySelectorAll('.home__profession-2 span');

anime.timeline({ loop: true })
  .add({
    targets: chars1,
    translateY: ['100%', '0%'],
    duration: 900,
    easing: 'easeOutCubic',
    delay: anime.stagger(50)
  })
  .add({
    targets: chars1,
    translateY: ['0%', '-100%'],
    duration: 900,
    easing: 'easeInCubic',
    delay: anime.stagger(50),
    offset: '+=4000'
  });

anime.timeline({ loop: true })
  .add({
    targets: chars2,
    translateY: ['100%', '0%'],
    duration: 900,
    easing: 'easeOutCubic',
    delay: anime.stagger(50)
  })
  .add({
    targets: chars2,
    translateY: ['0%', '-100%'],
    duration: 900,
    easing: 'easeInCubic',
    delay: anime.stagger(50),
    offset: '+=4000'
  });

/*=============== SWIPER PROJECTS ===================*/
let swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

/*=============== WORK TABS ===================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tc => {
      tc.classList.remove('work__active');
    });
    target.classList.add('work__active');

    tabs.forEach(t => t.classList.remove('work__active'));
    tab.classList.add('work__active');
  });
});

/*=============== SERVICES ACCORDION ===================*/
const accordionItems = document.querySelectorAll('.services__item');

accordionItems.forEach(item => {
  const header = item.querySelector('.services__header');

  header.addEventListener('click', () => {
    const openItem = document.querySelector('.services__open');

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const content = item.querySelector('.services__content');

  if (item.classList.contains('services__open')) {
    content.removeAttribute('style');
    item.classList.remove('services__open');
  } else {
    content.style.height = content.scrollHeight + 'px';
    item.classList.add('services__open');
  }
};

/*=============== TESTIMONIALS SWIPER ===================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  slidesPerView: 1,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

/*=============== COPY EMAIL ===================*/
/*=============== HIDDEN CONTACT BUTTONS (EMAIL + WHATSAPP) ===================*/
const whatsappBtn = document.getElementById('whatsappBtn');
const emailBtn = document.getElementById('emailBtn');

if (whatsappBtn) {
  const whatsappNumber = '263784760871'; // hidden number
  whatsappBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  });
}

if (emailBtn) {
  const emailAddress = 'mapandapydrosytinashe@gmail.com'; // hidden email
  emailBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  });
}

/*=============== FOOTER YEAR ===================*/
const yearSpan = document.querySelector('.footer__year');
if(yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ===================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});

sr.reveal('.section__title, .section__subtitle', {});
sr.reveal('.home__data, .about__data, .projects__card, .contact__form', { interval: 200 });

/*=============== CUSTOM CURSOR ===================*/
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

/* Hide cursor on links */
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.display = 'none'; });
  el.addEventListener('mouseleave', () => { cursor.style.display = 'block'; });
});
