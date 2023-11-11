document.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var logoContainer = document.querySelector(".logo-container");

    if (window.scrollY > 0) {
        header.style.padding = "10px";
        logoContainer.style.flexDirection = "row-reverse";
    } else {
        header.style.padding = "20px";
        logoContainer.style.flexDirection = "initial";
    }
});
