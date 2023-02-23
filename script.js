//Get elements
const slideUps = document.querySelectorAll('.slideUp');
const slideRights = document.querySelectorAll('.slideRight');
const slideLefts= document.querySelectorAll('.slideLeft');
const scaleUps= document.querySelectorAll('.scaleUp');
const changeColors= document.querySelectorAll('.changeColor');
const fadeIns= document.querySelectorAll('.fadeIn');

// Function to check if an element is in view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


// Function to loop through containers and check if they are in view
function slideUpContainers() {
  slideUps.forEach(container => {
    if (isInViewport(container)) {
      container.classList.add('toSlideUp');      
    }
  });
}
function slideRightContainers() {
  slideRights.forEach(container => {
    if (isInViewport(container)) {
      container.classList.add('toSlideRight');      
    }else {
    				container.classList.remove('toSlideRight');
    }
  });
}
function slideLeftContainers() {
  slideLefts.forEach(container => {
    if (isInViewport(container)) {
      container.classList.add('toSlideLeft');      
    }else{
    				container.classList.remove('toSlideLeft')
    }
  });
}
function scaleUpContainers() {
  scaleUps.forEach(container => {
    if (isInViewport(container)) {
      container.classList.add('toScaleUp');      
    }else {
    				container.classList.remove('toScaleUp');
    }
  });
}
function changeColorTexts() {
  changeColors.forEach(container => {
    if (isInViewport(container)) {
      container.classList.add('toChangeColor');      
    }else {
    				container.classList.remove('toChangeColor');
    }
  });
}
function fadeInTexts() {
  fadeIns.forEach(container => {
    if (isInViewport(container)) {
      container.classList.add('toFadeIn');      
    }else {
    				container.classList.remove('toFadeIn');
    }
  });
}
function animations(){
				slideUpContainers();
				slideRightContainers();
				slideLeftContainers();
				scaleUpContainers();
				changeColorTexts();
				fadeInTexts();
}


// Call showContainers on page load and scroll
window.addEventListener('load',animations);
window.addEventListener('scroll', animations);
