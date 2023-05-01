const commentButton = document.querySelectorAll("#comment-button");
const cardFooter = document.querySelectorAll(".card-footer");

commentButton.onclick = () => {
  commentSection.classList.remove('d-none');
};
