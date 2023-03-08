const checkbox = document.getElementById("switch");
const basicHeading = document.querySelector(".cards-section .basic .heading");
const proffessionalHeading = document.querySelector(
  ".cards-section .professional .heading"
);
const masterHeading = document.querySelector(".cards-section .master .heading");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    console.log("checked ");
    basicHeading.innerHTML = "19.99";
    proffessionalHeading.innerHTML = "24.99";
    masterHeading.innerHTML = "39.99";
  } else {
    console.log("not checked");
    basicHeading.innerHTML = "199.99";
    proffessionalHeading.innerHTML = "249.99";
    masterHeading.innerHTML = "399.99";
  }
});
