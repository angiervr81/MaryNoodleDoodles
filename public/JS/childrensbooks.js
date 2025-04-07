var modal = document.getElementById("popup-modal"); 
var closeButton = document.getElementById("close-button");
var popupImage = document.getElementById("popup-image");
var artistInfo = document.getElementById("artist-info");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

var images = document.querySelectorAll("#childrensbooks img");
var currentIndex = 0;

images.forEach(function(image, index) {
    image.addEventListener("click", function() {
        var imageSrc = this.getAttribute("src");
        var infoText = this.getAttribute("data-info");

        popupImage.src =imageSrc;
        artistInfo.textContent = infoText;

        currentIndex = index; // Update the current index to the clicked image's index
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
nextButton.onclick = function() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image if at the end
    var nextImage = images[currentIndex];
    popupImage.src = nextImage.getAttribute("src");
    artistInfo.textContent = nextImage.getAttribute("data-info");
}
prevButton.onclick = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image if at the beginning
    var prevImage = images[currentIndex];
    popupImage.src = prevImage.getAttribute("src");
    artistInfo.textContent = prevImage.getAttribute("data-info");
}