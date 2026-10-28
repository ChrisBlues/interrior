function openNav() {
    document.querySelector(".links").style.width = "100%";
    document.querySelector("body").style.overflow = "hidden";
}

function closeNav () {
    document.querySelector(".links").style.width = "0%";
    document.querySelector("body").style.overflow = "unset";
}