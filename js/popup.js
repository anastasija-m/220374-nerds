var link = document.querySelector(".contacts-link");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var name = popup.querySelector("[name=modal-content-name]");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    name.focus();
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});