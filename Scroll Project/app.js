// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const linkcontainer = document.querySelector(".links-container");
const navtoggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navtoggle.addEventListener("click", function () {
  // linkcontainer.classList.toggle('show-links')
  const containerheight = linkcontainer.getBoundingClientRect().height;
  const linkheight = links.getBoundingClientRect().height;
  if (containerheight === 0) {
    linkcontainer.style.height = `${linkheight}px`;
  } else {
    linkcontainer.style.height = 0;
  }
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollheight = window.scrollY;
  const navheight = navbar.getBoundingClientRect().height;

  if (scrollheight > navheight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollheight > 500) {
    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navheight=navbar.getBoundingClientRect().height
    const containerheight=linkcontainer.getBoundingClientRect().height
    const fixednav=navbar.classList.contains('fixed-nav')
    let position = element.offsetTop-navheight;
    if(!fixednav){
      position=position-navheight;
    }
    if(navheight>82){
      position=position+containerheight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linkcontainer.style.height = 0;
  });
});
// select links
