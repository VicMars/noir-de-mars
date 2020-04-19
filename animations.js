const social = document.querySelector('.bottom-link');

social.addEventListener("mouseover", (event) => {
  event.currentTarget.classList.toggle(".social-icon")
});
