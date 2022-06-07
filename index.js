// const slides = document.getElementsByClassName("carousel-item");
const slides = [
  "220603_idus_12219",
  "220603_idus_12216",
  "220603_idus_12211",
  "220603_idus_12204",
  "220603_idus_12202",
  "220603_idus_12196",
  "220603_idus_12193",
  "220603_idus_12190",
  "220603_idus_12189",
  "220603_idus_12186",
  "220603_idus_12184",
  "220603_idus_12179",
  "220603_idus_12178",
  "220603_idus_12177",
  "220603_idus_12173",
  "220603_idus_12171",
  "220603_idus_12167",
  "220603_idus_12166",
  "220603_idus_12164",
  "220603_idus_12158",
  "220603_idus_12155",
  "220603_idus_12151",
  "220603_idus_12148",
  "220603_idus_12143",
  "220603_idus_12141",
  "220603_idus_12139",
];

const images = document.getElementById("carousel");
const imagesClass = document.getElementById("carousel-item-visible");
const btn = document.getElementById("button");
const btnNext = document.getElementById("button-next");

function slideNext() {
  const chooseSlides = slides[Math.floor(Math.random() * slides.length)];
  imagesClass.innerHTML = `
  <img src="img/${chooseSlides}.jpg" alt="yokit_img">
  `;
}

btnNext.addEventListener("click", slideNext);
