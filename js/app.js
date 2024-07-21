//linking control
document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('.features .col-md-4').forEach(function(box) {
            box.addEventListener('click', function() {
                const feature = box.querySelector('h3').textContent.toLowerCase();
                window.location.href = `feature-details.html?feature=${feature}`;
            });
        });
        document.querySelectorAll('.benefits .col-md-4').forEach(function(box) {
          box.addEventListener('click', function() {
              const feature = box.querySelector('h3').textContent.toLowerCase();
              window.location.href = `benefits-details.html?benefit=${feature}`;
          });
      });
    });

     


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

  
const validate = (e) => {
  e.preventDefault();
 
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
//slider burda baslar
const navCircles = document.querySelectorAll('.naver-circle');
const slides = document.querySelectorAll('.header_slide');

let currentSlide = 0;
let slideInterval;

const goToSlide = (index) => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
  navCircles.forEach((navCircle) => {
    navCircle.classList.remove('active');
  });
  navCircles[index].classList.add('active');
  currentSlide = index;
};

const startInterval = () => {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
  }, 5000);
};

navCircles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    goToSlide(index);
    clearInterval(slideInterval); 
    startInterval(); 
  });
});

startInterval();
