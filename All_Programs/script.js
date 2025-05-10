document.addEventListener("DOMContentLoaded", function () {
  const box3 = document.querySelector("#userinfoMovingdiv");
  const btn1 = document.querySelector("#btn1");
  const btn2 = document.querySelector("#btn2");

  btn1.addEventListener("click", () => {
    box3.classList.add("shift-left");
    btn1.classList.add("hiddenButton");
    btn2.classList.remove("hiddenButton");
  });
  btn2.addEventListener("click", () => {
    box3.classList.remove("shift-left");
    btn2.classList.add("hiddenButton");
    btn1.classList.remove("hiddenButton");
  });
});
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let body=document.querySelector('body');
btn1.addEventListener("click",()=>{
      const body=document.querySelector(".front-page");
      body.style.animation='frontPagePhotoChangeRoom 14s infinite';
});
btn2.addEventListener("click",()=>{
  const body=document.querySelector(".front-page");
  body.style.animation='frontPagePhotoChangeFood 14s infinite';
});
