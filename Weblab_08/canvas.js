function mouse() {
    var x = document.getElementById("canvas");
    canvas = x.getContext("2d");
    window.addEventListener("mousemove", icon, false);
}

function icon(e) {
    var xPos = e.clientX;
    var yPos = e.clientY;
    var pic = new Image();
    canvas.clearRect(0, 0, 650, 650)
    pic.src = "http://www.pngall.com/wp-content/uploads/2016/06/Face-with-Tears-of-Joy-Emoji-PNG.png"
    canvas.drawImage(pic, xPos-25, yPos-25, 50, 50);
}

window.addEventListener("load", mouse, false);


