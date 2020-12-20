

//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 5 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 5 - e.pageY) / 50;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});

//Movement Animation to happen
const card2 = document.querySelector(".card2");
const container2 = document.querySelector(".container2");
//Items
const title2 = document.querySelector(".title2");
const sneaker2 = document.querySelector(".sneaker2 img");
const purchase2 = document.querySelector(".purchase2");
const description2 = document.querySelector(".info2 h3");
const sizes2 = document.querySelector(".sizes2");

//Moving Animation Event
card2.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 5 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 5 - e.pageY) / 50;
  card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
card2.addEventListener("mouseenter", (e) => {
  card2.style.transition = "none";
  //Popout
  title2.style.transform = "translateZ(150px)";
  sneaker2.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description2.style.transform = "translateZ(125px)";
  sizes2.style.transform = "translateZ(100px)";
  purchase2.style.transform = "translateZ(75px)";
});
//Animate Out
card2.addEventListener("mouseleave", (e) => {
  card2.style.transition = "all 0.5s ease";
  card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title2.style.transform = "translateZ(0px)";
  sneaker2.style.transform = "translateZ(0px) rotateZ(0deg)";
  description2.style.transform = "translateZ(0px)";
  sizes2.style.transform = "translateZ(0px)";
  purchase2.style.transform = "translateZ(0px)";
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




