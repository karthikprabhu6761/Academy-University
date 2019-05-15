// Menu-Bar for Mobile

var hamburgerMenu = document.getElementById('menuBar');
var menuNavigation = document.getElementById('menuNav');

hamburgerMenu.addEventListener('click', function () {
  if (menuNavigation.classList.contains('active')) {
    menuNavigation.classList.remove('active');
  } else {
    menuNavigation.classList.add('active');
  }
});

// Banner

var slides = document.querySelectorAll('.slide');
var next = document.querySelector('#next');
var prev = document.querySelector('#prev');

next.addEventListener('click', function nextButton() {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 6000);
});

prev.addEventListener('click', function prevButton() {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 6000);
});

function nextSlide() {
  var present = document.querySelector('.present');
  present.classList.remove('present');
  if (present.nextElementSibling) {
    present.nextElementSibling.classList.add('present');
  } else {
    slides[0].classList.add('present');
  }
}

function prevSlide() {
  var present = document.querySelector('.present');
  present.classList.remove('present');
  if (present.previousElementSibling) {
    present.previousElementSibling.classList.add('present');
  } else {
    slides[slides.length - 1].classList.add('present');
  }
}

var slideInterval = setInterval(nextSlide, 4000);


// Go To Top

window.addEventListener('scroll', function () {
  if (scrollY > 1000) {
    document.getElementById('go_top').style.display = "block";
  } else {
    document.getElementById('go_top').style.display = "none";
  }
});