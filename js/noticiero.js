var modal = document.getElementById("modala");
var img = document.getElementById("Img");
var modalContent = document.querySelector(".modal-content");
var span = document.getElementsByClassName("close")[0];

img.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
