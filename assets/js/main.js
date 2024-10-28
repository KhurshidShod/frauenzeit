import "/assets/sass/vendors/base.scss";
import "/assets/sass/main.scss";
const popUp = document.querySelector(".article__popup_wrapper");
document.querySelector(".close_popup").addEventListener("click", () => {
  popUp.style.display = "none";
});
document.querySelectorAll(".article__tab_single").forEach((item) => {
  item.addEventListener("click", () => {
    popUp.style.display = "flex";
  });
});
