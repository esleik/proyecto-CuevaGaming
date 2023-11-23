var modales = document.querySelectorAll(".modala");
var imgs = document.querySelectorAll(".trucosimg");
var modalContents = document.querySelectorAll(".modala .modal-content");
var spans = document.querySelectorAll(".modala .close");

imgs.forEach(function (img, index) {
    img.onclick = function () {
        modales[index].style.display = "block";
    };

    spans[index].onclick = function () {
        modales[index].style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modales[index]) {
            modales[index].style.display = "none";
        }
    };
});