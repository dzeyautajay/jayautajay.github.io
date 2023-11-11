document.addEventListener("DOMContentLoaded", function () {
    const developerTexts = document.querySelectorAll(".developer-text");
    let currentIndex = 0;

    function changeDeveloperText() {
        developerTexts[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % developerTexts.length;
        developerTexts[currentIndex].style.opacity = 1;
    }

    setInterval(changeDeveloperText, 6000);

    const developerImage = document.querySelector(".developer-image");
    setTimeout(function () {
        developerImage.style.opacity = 1;
    }, 2000);
});

