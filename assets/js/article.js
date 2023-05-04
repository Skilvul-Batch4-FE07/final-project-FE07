const url = "https://644e64ed1b4567f4d5866c65.mockapi.io/articles/";

// Function untuk mengambil data artikel dari API
async function getArticles(page) {
  try {
    const response = await fetch(`${url}?page=${page}&limit=6`);
    const data = await response.json();

    
const sorotArticle = document.getElementById("sorotArticle");
sorotArticle.innerHTML = `
  <div class="col">
    <div class="row-md-6 mb-3">
      <div class="card h-100">
        <img
          src="${data[0].image}"
          class="card-img-top"
          alt="${data[0].title}"
        />
        <div class="card-body">
          <h2 class="card-title fw-bold mb-3">${data[0].title}</h2>
          <p class="card-text">${data[0].description}</p>
          <a href="articleDetail.html?id=${data[0].id}" class="btn btn-success">Baca Selengkapnya</a>
        </div>
      </div>
    </div>
    <div class="row-md-6 mb-3">
      <div class="card h-100">
        <img
          src="${data[1].image}"
          class="card-img-top"
          alt="${data[1].title}"
        />
        <div class="card-body">
          <h2 class="card-title fw-bold mb-3">${data[1].title}</h2>
          <p class="card-text">${data[1].description}</p>
          <a href="articleDetail.html?id=${data[1].id}" class="btn btn-success">Baca Selengkapnya</a>
        </div>
      </div>
    </div>
  </div>
`;


    // Menampilkan artikel pilihan
    const myArticles = document.getElementById("myArticles");
    myArticles.innerHTML = "";
    for (let i = 1; i < data.length; i++) {
      myArticles.innerHTML += `
        <div class="col-md-12">
          <div class="card">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${data[i].image}" class="img-fluid rounded-start" alt="${data[i].title}"/>
              </div>
              <div class="col-md-8">
                <div class="card-body" style="display: flex; align-items: center;">
                  <div>
                    <h5 class="card-title fw-bold"style="font-size: 20px">${data[i].title}</h5>
                    <a href="articleDetail.html?id=${data[i].id}" class="btn btn-success">Baca Selengkapnya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      `;
    }
  // Menambahkan event listener ke tombol Read More
    const readMoreButtons = document.querySelectorAll(".read-more");
    readMoreButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const articleId = event.target.getAttribute("data-id");
        getArticleById(articleId);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

// Function untuk mengambil data artikel berdasarkan ID
async function getArticleById(id) {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();

    // Menampilkan data artikel pada elemen HTML dengan id articleDetail
    const articleDetail = document.getElementById("articleDetail");
    articleDetail.innerHTML = `
      <div class="card mb-5">
        <img src="${data.image}" class="card-img-top" alt="${data.title}">
        <div class="card-body"><br>
          <h2 class="card-title" >${data.title}</h2><br>
          <p class="card-text" style="font-size: 18px">${data.article}</p>
          <p class="card-text"><small class="text-muted">${data.author}</small></p>
        </div>
      </div>
    `;
    
  } catch (error) {
    console.log(error);
  }
}

// Memanggil fungsi getArticleById() saat halaman selesai di-load
window.addEventListener("load", () => {
  // Mendapatkan id artikel dari URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  // Memanggil fungsi getArticleById() dengan id artikel sebagai argumen
  getArticleById(id);
});

// Memanggil function getArticles() saat halaman selesai di-load
window.addEventListener("load", () => {
  getArticles(1);
});

// menambahkan event listener pada tombol Next Article
  document.getElementById("nextArticleButton").addEventListener("click", function() {
    // mengambil id artikel yang sekarang ditampilkan
    const currentId = parseInt(window.location.search.replace("?id=", ""));
    // mengambil id artikel selanjutnya
    const nextId = currentId + 1;
    if (nextId == 10) {
    // jika masih ada artikel sebelumnya
    // redirect ke halaman detail artikel sebelumnya
      document.getElementById("nextArticleButton").style.display = "none";
    
  } else {
    // jika artikel yang ditampilkan adalah artikel pertama (index 0)
    // sembunyikan tombol "Prev Article"
    window.location.href = "articleDetail.html?id=" + nextId;
  }
  });

// menambahkan event listener pada tombol Next Article
  document.getElementById("prevArticleButton").addEventListener("click", function() {
    // mengambil id artikel yang sekarang ditampilkan
    const currentId = parseInt(window.location.search.replace("?id=", ""));
    // mengambil id artikel selanjutnya
    const prevId = currentId - 1;

    if (prevId == 0) {
    // jika masih ada artikel sebelumnya
    // redirect ke halaman detail artikel sebelumnya
      document.getElementById("prevArticleButton").style.display = "none";
    
  } else {
    // jika artikel yang ditampilkan adalah artikel pertama (index 0)
    // sembunyikan tombol "Prev Article"
    window.location.href = "articleDetail.html?id=" + prevId;
  }
});
  