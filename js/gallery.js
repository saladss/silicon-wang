const galleries = document.querySelectorAll("[data-gallery]");
const lightbox = document.querySelector("[data-lightbox]");

if (galleries.length && lightbox) {
  const lightboxImage = lightbox.querySelector("[data-lightbox-image]");
  let images = [];
  let index = 0;

  function show(i) {
    index = (i + images.length) % images.length;
    lightboxImage.src = images[index].src;
    lightboxImage.alt = images[index].alt;
  }

  function open(gallery, i) {
    images = Array.from(gallery.querySelectorAll("img"));
    show(i);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightbox.querySelector("[data-lightbox-close]").focus();
  }

  function close() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  galleries.forEach((gallery) => {
    const imgs = Array.from(gallery.querySelectorAll("img"));
    imgs.forEach((img, i) => {
      img.addEventListener("click", () => open(gallery, i));
      img.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open(gallery, i);
        }
      });
    });
  });

  lightbox.querySelector("[data-lightbox-close]").addEventListener("click", close);
  lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", () => show(index - 1));
  lightbox.querySelector("[data-lightbox-next]").addEventListener("click", () => show(index + 1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
}
