// Light / Dark  theme toggle
const body = document.querySelector('body');
const iconsContainer = document.querySelector('.nav-right__theme-toggler');
const darkIcon = document.querySelector('.uil-moon');
const lightIcon = document.querySelector('.uil-sun');

iconsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('uil-moon')) {
    e.target.style.display = 'none';
    lightIcon.style.display = 'block';
    body.dataset.theme = 'dark';
  } else {
    e.target.style.display = 'none';
    darkIcon.style.display = 'block';
    body.dataset.theme = 'default';
  }
});

// Switching active class between links / event delegation
const parentUl = document.querySelector('.nav-right__ul');
const links = document.querySelectorAll('.header__link');

parentUl.addEventListener('click', function (e) {
  // return if clicked on blank space in the parentUl
  if (e.target.classList.contains('nav-right__ul')) return;
  // logic for clicking on the 'span' element inside of the 'a' element
  if (e.target.classList.contains('li-ordinal')) {
    const parentLink = e.target.closest('a').classList.contains('active');
    if (parentLink) return;
    links.forEach(link => link.classList.remove('active'));
    e.target.closest('.header__link').classList.add('active');
  }
  // logic for clicking on the 'a' element
  if (e.target.classList.contains('header__link')) {
    if (e.target.classList.contains('active')) return;

    links.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
  }
});

// scroll progress bar

const progressBarFiller = document.querySelector('.scroll-bar');

document.addEventListener('scroll', function () {
  const windowScroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const percentage = (windowScroll / height) * 100;

  progressBarFiller.style.width = `${percentage}%`;
});

// Sticky nav element on scroll

const section = document.querySelector('#home');
const nav = document.querySelector('.nav');

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  !entry.isIntersecting
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky');
};

const sectionObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  thresholdMargin: 100,
});
sectionObserver.observe(section);
