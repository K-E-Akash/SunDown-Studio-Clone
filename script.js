// LOCOMOTIVE SCROLL (code copied from - locomotive js github, Smooth scroll).
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });


// Intro page.
introDiv = document.querySelector('#intro')
setTimeout(function() {
  introDiv.style.top = '-100%'
}, 4000)


// Fixed Image Div.
let elemCont = document.querySelector('#elem-container')
let fixedImg = document.querySelector('#fixed-image')

elemCont.addEventListener('mouseenter', () => {
  fixedImg.style.display = 'block'
})

fixedImg.addEventListener('mouseenter', () => {
  fixedImg.style.display = 'block'
})

fixedImg.addEventListener('mouseleave', () => {
  fixedImg.style.display = 'none'
})

elemCont.addEventListener('mouseleave', () => {
  fixedImg.style.display = 'none'
})

let elements = document.querySelectorAll('.elem')
elements.forEach((e) => {
  e.addEventListener('mouseenter', function () {
    let image = e.getAttribute('image-data')
    fixedImg.style.backgroundImage = `url(${image})`
  })
})


// SWIPER.
let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30
})


// BodyDiv animations.
document.getElementById('div1').addEventListener('click', function () {
  toggleStyle('div1');
  toggleActive('.elem1');
});

document.getElementById('div2').addEventListener('click', function () {
  toggleStyle('div2');
  toggleActive('.elem2');
});

document.getElementById('div3').addEventListener('click', function () {
  toggleStyle('div3');
  toggleActive('.elem3');
});

// To toggle heading elements styling.
function toggleStyle(elementId) {
  // Get the clicked element
  let clickedElement = document.getElementById(elementId);

  // Reset styles on all elements
  let allElements = document.querySelectorAll('.toggle-element');
  allElements.forEach(function (element) {
    element.classList.remove('active-style');
  });

  // Apply styles to the clicked element
  clickedElement.classList.add('active-style');
}

// To toggle images and content.
function toggleActive(e) {
  // Hide all active divs.
  document.querySelectorAll('.body-content').forEach(function (div) {
    div.classList.remove('active');
  });
  document.querySelectorAll('.body-img').forEach(function (div) {
    div.classList.remove('active');
  });

  // Show the clicked div.
  document.querySelectorAll(e).forEach(function (elem) {
    elem.classList.add('active');
  })
}


// Popup animation.
const sections = document.querySelectorAll('.popup-section');
// Add scroll event listener
document.addEventListener('scroll', () => {
  sections.forEach(section => {
    rect = section.getBoundingClientRect();
    console.log('rect.top:', rect.top);
    console.log('rect.bottom:', rect.bottom);
    console.log('Viewport height:', window.innerHeight);

    if ((rect.bottom && rect.top) < window.innerHeight-80) {
      section.classList.add('scroll-visible');
    }
  });
});


// Script for Mobile.
let menuBtn = document.querySelector('#nav3')
let hamburgerBtn = document.querySelector('#hamburger-sym')
let closeBtn = document.querySelector('#close-sym')
let navBg = document.querySelector('#flow-screen')
let dropNav = document.querySelector('#nav5')
let menuVal = 0

menuBtn.addEventListener('click', function() {
  if (menuVal == 0){
    hamburgerBtn.style.display = 'none'
    closeBtn.style.display = 'block'
    menuVal = 1
    navBg.style.top = 0
    dropNav.style.top = 0
  } else {
    hamburgerBtn.style.display = 'block'
    closeBtn.style.display = 'none'
    menuVal = 0
    dropNav.style.top = '-100%'
    navBg.style.top = '-100%'
  }
})

