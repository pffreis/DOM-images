const arrayOfImages = ['https://wallpapercave.com/w/JAA5qgn.jpg',
    'https://wallpapercave.com/w/3kRbHzu.jpg',
    'https://wallpapercave.com/w/GANeJOE.jpg',
    'https://wallpapercave.com/w/Pg8tWyv.jpg',
    'https://wallpapercave.com/w/LrITsWf.jpg',
    'https://wallpapercave.com/w/bRUkpo4.jpg',
    'https://wallpapercave.com/w/5Yz99IG.jpg',
    'https://wallpapercave.com/wp/wp12904422.jpg',
    'https://wallpapercave.com/wp/wp12913329.jpg',
    'https://wallpapercave.com/wp/wp12913347.jpg',
    'https://wallpapercave.com/wp/wp12912964.jpg',
    'https://wallpapercave.com/wp/wp12912313.jpg',
    'https://wallpapercave.com/wp/wp12915007.jpg',
    'https://wallpapercave.com/wp/wp11285819.jpg', 
    'https://wallpapercave.com/wp/wp12587721.jpg',
    'https://wallpapercave.com/wp/wp12917016.jpg'];

window.onload = function () {
    showImage();
}

window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showImage();
    }
}

function showImage() {
    for (let i = 0; i < arrayOfImages.length; i++) {
        const index = Math.floor(Math.random() * arrayOfImages.length - 1)
        let img = document.createElement("img");
        img.src = arrayOfImages[index];
        let src = document.getElementsByTagName("body")[0];
        src.appendChild(img);
    }
}

