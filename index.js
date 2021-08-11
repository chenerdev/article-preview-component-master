const activebtn = document.querySelector(".img3"),
  popcopen = document.querySelector(".shearpopup"),
  svg = document.querySelector(".svg");

activebtn.addEventListener("click", () => {
  popcopen.classList.toggle("popoon");
});

svg.addEventListener("click", () => {
  popcopen.classList.toggle("popoon");
});
