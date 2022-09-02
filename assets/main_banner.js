$(".banner__slider").slick({
  arrows: false,
  dots: true,
  dotsClass: "banner__dots",
});

[...document.querySelector(".banner__dots").children].forEach(
  (el) => (el.textContent = "")
);
