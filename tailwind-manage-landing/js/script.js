const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

const swiper = new Swiper(".swiper", {
  onAny(eventName, ...args) {
    console.log("Event: ", eventName);
    console.log("Event data: ", args);
  },

  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
