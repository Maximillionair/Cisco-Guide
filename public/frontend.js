document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".clickable");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function () {
            lightboxImg.src = img.src;
            lightbox.classList.remove("hidden");
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.classList.add("hidden");
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.classList.add("hidden");
        }
    });
});
