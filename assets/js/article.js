const url = "https://644e64ed1b4567f4d5866c65.mockapi.io/articles";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then((data) => {
    const imageUrl = data[0].image;

    const img = document.querySelector(".card-img-top");
    img.src = imageUrl;
    img.alt = "Gambar artikel";

    const title = data[0].title;
    const desc = data[0].description;

    document.querySelector(".card-title").innerHTML = title;
    document.querySelector(".card-text").innerHTML = desc;

    const dateUpd = data[1].createdAt;
    const dateOnly = dateUpd.split("T")[0].split("-").slice(0, 3).join("-");
    document.getElementById("date-update").innerHTML = dateOnly;

    const titlePilihan = data[1].title;
    console.log(titlePilihan);
    document.getElementById("art-pilihan1").innerHTML = titlePilihan;
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });
s