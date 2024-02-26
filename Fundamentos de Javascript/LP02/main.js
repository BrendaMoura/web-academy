const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];

/* Declaring the alternative text for each image file */
const texts = ["chair", "flower", "bird", "boat", "house"];

/* Looping through images */

for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", images[i]);
  newImage.setAttribute("alt", texts[i]);
  newImage.onclick = () => {
    displayedImage.setAttribute("src", images[i]);
    displayedImage.setAttribute("alt", texts[i]);
  };
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
};
