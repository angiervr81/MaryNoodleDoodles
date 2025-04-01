var modal = document.getElementById("popup-modal"); 
var closeButton = document.getElementById("close-button");
var popupImage = document.getElementById("popup-image");
var artistInfo = document.getElementById("artist-info");

var images = document.querySelectorAll("#childrensbooks img");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        var imageSrc = this.getAttribute("src");
        var infoText = this.getAttribute("data-info");

        popupImage.src =imageSrc;
        artistInfo.textContent = infoText;

        modal.style.display = "block";
    });
});

closeButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}