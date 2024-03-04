let images = document.querySelectorAll(".item .imgdiv img")
function handleImageError(img) {
    // Set the background color of the parent element to black
    img.parentElement.style.backgroundColor = "black";
}
for(image of images){
    image.addEventListener("error", function() {
        handleImageError(this);
    });
}
