//Form Feedback notif dan clear content
const forms = document.querySelector(".form-email");
const forms2 = document.querySelector(".form-feedback");
const feeds = document.querySelector(".feedback");

feeds.addEventListener("click", function () {
  forms.value = "";
  forms2.value = "";
  alert("Feedback Terkirim");
});

//windows scroll
window.addEventListener("scroll", function () {
  let navs = document.querySelector(".navbar");
  let navi = document.querySelector(".brand1");
  navs.classList.toggle("sticky", window.scrollY > 0);
  navi.classList.toggle("brand-none", window.scrollY > 0);
});

//Dark Mode
function dark() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
