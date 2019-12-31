setTimeout(function() {
  let setOpacity = () => {
    let sectionWrapper = document.querySelectorAll(".main-content-container");
    for (let i = 0; i < sectionWrapper.length; i++) {
      sectionWrapper[i].classList.remove("zero-opacity-class");
    }
  };
  setOpacity();
}, 500);

setTimeout(function() {
  let setOpacity = () => {
    let sectionWrapper = document.querySelectorAll(".order-contact");
    for (let i = 0; i < sectionWrapper.length; i++) {
      sectionWrapper[i].classList.remove("zero-opacity-class");
    }
  };
  setOpacity();
}, 1500);

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function() {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

function hideContainerAnimation(e) {
  e.preventDefault();

  document.querySelector(".main-content").classList.add("fastChange");

  setTimeout(function() {
    window.location = "products.html";
  }, 500);
}

let productsBtn = document.querySelector(".main-nav__list-item.products");
productsBtn.addEventListener("click", hideContainerAnimation);
