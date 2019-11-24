document.querySelector(".navbar-hamburger").onclick = function () {
    active()
};

function active() {
    document.querySelector(".navbar-hamburger").classList.toggle("active");
    document.querySelector(".navbar-list").classList.toggle("show");
};


document.body.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementById("preloader");
        if (!preloader.classList.contains("done")) {
            preloader.classList.add("done");
        }
    }, 1000);
}
