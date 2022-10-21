const quotes = [
  {
    name: "Warren Buffett",
    job: "Investor",
    img: "./image/buffett.jpg",
    info: "It's far better to buy a wonderful company at a fair price, than a fair company at a wonderful price",
  },
  {
    name: "Steve Jobs",
    job: "CEO Apple",
    img: "./image/steve.jpg",
    info: "Your time is limited, so don't waste it living someone else's life.Don't live with the results of other people's thinking",
  },
  {
    name: "Walt Disney",
    job: "CEO Disney",
    img: "./image/disney.jpg",
    info: "The way to get started is to quit talking and begin doing",
  },
  {
    name: "James Cameron",
    job: "Director",
    img: "./image/cameron.jpg",
    info: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
  },
];

let professionEl = document.getElementById("profession");
let personImgEl = document.getElementById("person-img");
let personNameEl = document.getElementById("person-name");
let quoteEl = document.getElementById("quote");

let currItem = 0;
//event triggered when the window is loaded
window.addEventListener("DOMContentLoaded", function () {
  const item = quotes[currItem];
  personImgEl.src = item.img;
  personNameEl.textContent = item.name;
  professionEl.textContent = item.job;
  quoteEl.textContent = item.info;
});

//making buttons work
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const randomBtn = document.getElementById("random-btn");

nextBtn.addEventListener("click", function () {
  currItem += 1;
  const n = quotes.length;
  const item = quotes[currItem % n];
  personImgEl.src = item.img;
  personNameEl.textContent = item.name;
  professionEl.textContent = item.job;
  quoteEl.textContent = item.info;
});

prevBtn.addEventListener("click", function () {
  const n = quotes.length;
  currItem -= 1;
  currItem += n;
  const item = quotes[currItem % n];
  personImgEl.src = item.img;
  personNameEl.textContent = item.name;
  professionEl.textContent = item.job;
  quoteEl.textContent = item.info;
});

randomBtn.addEventListener("click", function () {
  const n = quotes.length;
  let idx = Math.floor(Math.random() * n);
  if (idx === currItem) {
    idx++;
  }
  const item = quotes[idx % n];
  personImgEl.src = item.img;
  personNameEl.textContent = item.name;
  professionEl.textContent = item.job;
  quoteEl.textContent = item.info;
});
