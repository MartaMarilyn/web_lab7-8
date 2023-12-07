let images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
];

let photo_number = 0;
let photo = document.getElementById("photo")

function prev_photo(evt) {
    if (photo_number == 0) {
        photo_number = images.length - 1;
    } else {
        photo_number--;
    }
    show();
}

function next_photo(evt) {
    if (photo_number == images.length - 1) {
        photo_number = 0;
    } else {
        photo_number++;
    }
    show();
}

function show() {
    console.log(photo);
    photo.src = images[photo_number];
}

show();