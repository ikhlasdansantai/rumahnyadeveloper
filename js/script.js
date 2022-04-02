const tombol = document.querySelector(".nav-toggle input");
const nav = document.querySelector(".trick ul");
tombol.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

// audio
const user1 = document.getElementsByClassName("user-1-img")[0];
const jiyoon = new Audio();
jiyoon.src = "./audio/shinjiyoon.mp3";

user1.addEventListener("mouseover", () => {
  jiyoon.play();
});

const user2 = document.getElementsByClassName("user-1-img")[1];
const jihan = new Audio();
jihan.src = "./audio/jihan.mp3";

user2.addEventListener("mouseover", () => {
  jihan.play();
});

const user3 = document.getElementsByClassName("user-1-img")[2];
const soeun = new Audio();
soeun.src = "./audio/parksoeun.mp3";

user3.addEventListener("mouseover", () => {
  soeun.play();
});

const user4 = document.getElementsByClassName("user-1-img")[3];
const soojin = new Audio();
soojin.src = "./audio/leesoojin.mp3";

user4.addEventListener("mouseover", () => {
  soojin.play();
});

const user5 = document.getElementsByClassName("user-5")[0];
const giselle = new Audio();
giselle.src = "./audio/giselle.mp3";

user5.addEventListener("mouseover", () => {
  giselle.play();
});

const contact1 = document.querySelector(".card-info .tombol-1");
const contactActive1 = document.querySelectorAll(".sosmed-1");
contact1.addEventListener("click", () => {
  for (let i = 0; i < contactActive1.length; i++) {
    contactActive1[i].classList.toggle("slideup");
  }
});

const contact2 = document.querySelector(".card-info .tombol-2");
const contactActive2 = document.querySelectorAll(".sosmed-2");
contact2.addEventListener("click", () => {
  for (let i = 0; i < contactActive2.length; i++) {
    contactActive2[i].classList.toggle("slideup");
  }
});

const contact3 = document.querySelector(".card-info .tombol-3");
const contactActive3 = document.querySelectorAll(".sosmed-3");
contact3.addEventListener("click", () => {
  for (let i = 0; i < contactActive3.length; i++) {
    contactActive3[i].classList.toggle("slideup");
  }
});

const contact4 = document.getElementsByClassName("tombol-4")[0];
const contactActive4 = document.querySelectorAll(".sosmed-4");
contact4.addEventListener("click", () => {
  for (let i = 0; i < contactActive4.length; i++) {
    contactActive4[i].classList.toggle("slideup");
  }
});
