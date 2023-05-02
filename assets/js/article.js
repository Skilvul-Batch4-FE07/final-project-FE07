const url = "https://644e64ed1b4567f4d5866c65.mockapi.io/articles";

//function untuk membuat card artikel di kolom kiri
function createCard(image, title, description) {
  //element div
  const card = document.createElement("div");
  card.classList.add("card", "bg-transparent");

  //element img
  const img = document.createElement("img");
  img.src = image;
  img.classList.add("card-img-top");
  img.alt = "img-artikel";

  //element div card-body
  const body = document.createElement("div");
  body.classList.add("card-body");

  //element title
  const titleH5 = document.createElement("h5");
  titleH5.classList.add("card-title", "fw-semibold");
  titleH5.style = "font-size: 18px; padding-bottom: 10px";
  titleH5.textContent = title;

  //element paragraf
  const paragraf = document.createElement("p");
  paragraf.classList.add("card-text", "fw-normal");
  paragraf.style = "font-size: 14px; color: #696969";
  paragraf.textContent = description;

  //element div untuk button
  const button = document.createElement("div");
  button.classList.add("d-flex", "justify-content-end");

  //element button
  const anchor = document.createElement("a");
  anchor.classList.add("btn", "py-3", "px-3");
  anchor.textContent = "Baca Selengkapnya";
  anchor.href = "#";

  button.appendChild(anchor);

  body.appendChild(titleH5);
  body.appendChild(paragraf);
  body.appendChild(button);

  card.appendChild(img);
  card.appendChild(body);

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