$(".banner__slider").slick({
  arrows: false,
  dots: true,
  dotsClass: "banner__dots",
});

[...document.querySelector(".banner__dots").children].forEach(
  (el) => (el.textContent = "")
);

document.querySelector(".header__barsbox").addEventListener("click", (e) => {
  document.querySelector("aside.aside").classList.toggle("active");
  // document.body.classList.toggle("overflow-hidden-mobile");
});
