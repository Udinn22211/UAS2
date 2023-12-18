document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".content2 img");
    let content2Position = document.querySelector(".content2").offsetTop;
    let windowHeight = window.innerHeight;

    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function() {
            let context = this, args = arguments;
            let later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function showImages() {
        let scrollPosition = window.scrollY;

        if (scrollPosition + windowHeight >= content2Position) {
            images.forEach((image, index) => {
                setTimeout(() => {
                    image.classList.add('show');
                }, index * 150);
            });


            window.removeEventListener('scroll', debouncedShowImages);
        } else {
            images.forEach(image => {
                image.classList.remove('show');
            });
        }
    }

    let debouncedShowImages = debounce(showImages, 10);

    window.addEventListener('scroll', debouncedShowImages);
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    setTimeout(() => {
        navLinks.classList.remove('show');
    }, 5000);
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("h1").style.opacity = "1";
    document.querySelector("h1").style.transform = "translateY(0)";
    document.querySelector("p").style.opacity = "1";
    document.querySelector("p").style.transform = "translateY(0)";

    document.querySelector("#generasi-title").style.opacity = "1";
    document.querySelector("#generasi-title").style.transform = "translateY(0)";
    document.querySelector("#generasi-description").style.opacity = "1"; // Perbaiki ke "1"
    document.querySelector("#generasi-description").style.transform = "translateY(0)";

});
