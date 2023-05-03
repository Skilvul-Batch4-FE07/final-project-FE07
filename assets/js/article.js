const url = "https://644e64ed1b4567f4d5866c65.mockapi.io/articles";

function createCard(image, title, description) {
  const card = document.createElement("div");
  card.classList.add("card", "bg-transparent");

  const img = document.createElement("img");
  img.src = image;
  img.classList.add("card-img-top");
  img.alt = "img-artikel";

  const body = document.createElement("div");
  body.classList.add("card-body");

  const titleH5 = document.createElement("h5");
  titleH5.classList.add("card-title", "fw-semibold");
  titleH5.style = "font-size: 18px; padding-bottom: 10px";
  titleH5.textContent = title;

  const paragraf = document.createElement("p");
  paragraf.classList.add("card-text", "fw-normal");
  paragraf.style = "font-size: 14px; color: #696969";
  paragraf.textContent = description;

  const button = document.createElement("div");
  button.classList.add("d-flex", "justify-content-end");

  const anchor = document.createElement("a");
  anchor.classList.add("btn", "py-3", "px-3");
  anchor.textContent = "Baca Selengkapnya";

  button.appendChild(anchor);

  body.appendChild(titleH5);
  body.appendChild(paragraf);
  body.appendChild(button);

  card.appendChild(img);
  card.appendChild(body);

  console.log(card);
  return card;
}

function createCardPilihan(image, createdAt, title) {
  const row = document.createElement("div");
  row.classList.add("row", "mb-3");

  const colImg = document.createElement("div");
  colImg.classList.add("col-md-6");

  const img = document.createElement("img");
  img.src = image;
  img.classList.add("img-fluid", "rounded-start");
  img.alt = "img-artikel";
  
  colImg.appendChild(img);

  const colText = document.createElement("div");
  colText.classList.add("col-md-6");

  const body = document.createElement("div");
  body.classList.add("card-body");

  const dateSpan = document.createElement("span");
  dateSpan.classList.add("small", "text-muted");
  dateSpan.textContent = createdAt
    .split("T")[0]
    .split("-")
    .slice(0, 3)
    .join("-");

  const titleH5 = document.createElement("h5");
  titleH5.classList.add("card-title", "fw-bold");
  titleH5.style.fontSize = "16px";
  titleH5.textContent = title;

  body.appendChild(dateSpan);
  body.appendChild(titleH5);

  colText.appendChild(body);

  row.appendChild(colImg);
  row.appendChild(colText);

  const card = document.createElement("div");
  card.classList.add("card");
  card.appendChild(row);

  return card;
}


document.addEventListener("DOMContentLoaded", function () {
  const sorotArticle = document.getElementById("sorotArticle");
  const myArticles = document.getElementById("myArticles");
  console.log(sorotArticle);
  console.log(myArticles);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.slice(0, 2).forEach((item) => {
        const card = createCard(
          item.image,
          item.title,
          item.description
        );
        sorotArticle.appendChild(card);
      });
      data.slice(2).forEach((item) => {
        const cardPilihan = createCardPilihan(
          item.image,
          item.createdAt,
          item.title
        );
        myArticles.appendChild(cardPilihan);
      });
    });
});

// Mendapatkan referensi ke tautan halaman
const page1Link = document.getElementById('page1');
const page2Link = document.getElementById('page2');
const page3Link = document.getElementById('page3');

// Menambahkan event listener untuk setiap tautan halaman
page1Link.addEventListener('click', function(event) {
  event.preventDefault(); // Menghentikan perilaku bawaan dari tautan
  window.location.href = page1Link.getAttribute('index.html'); // Mengarahkan ke halaman yang ditentukan di atribut href
});

page2Link.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = page2Link.getAttribute('forum.html');
});

page3Link.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = page3Link.getAttribute('index.html');
});
