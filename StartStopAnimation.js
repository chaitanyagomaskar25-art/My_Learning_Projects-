const large = document.getElementById("large");
const small = document.getElementById("small");
const start = document.getElementById("start");
const stop = document.getElementById("stop"); 


start.addEventListener("click", () => {
  large.style.animationPlayState = "running";
  small.style.animationPlayState = "running";
});

stop.addEventListener("click", () => {
  large.style.animationPlayState = "paused";
  small.style.animationPlayState = "paused";
});