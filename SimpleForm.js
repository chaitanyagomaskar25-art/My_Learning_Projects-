const isFormDirty = false;
const allInput = document.querySelectorAll("#name, #mail, #number, #address");
const form = document.getElementById("form");
const bar = document.getElementById("topBar");
const submitBtn = document.getElementById("submit");

allInput.forEach(input => {
      input.addEventListener("input", () => {
        isFormDirty = true;
      });
});

form.addEventListener("submit", () => {
    isFormDirty = false;
});

window.addEventListener("beforeunload", (event) => {
    if (isFormDirty) {
      event.preventDefault();
    }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  bar.classList.remove("hidden");

  bar.style.animation = "none";
  bar.offsetHeight; 
  bar.style.animation = "";
});

bar.addEventListener("animationend", () => {
  allInput.forEach(input => {
      input.value = "";
});
  bar.classList.add("hidden");
});
