function drag() {
    crab = document.getElementById("crab");
    leftbox = document.getElementById("leftBox");

    crab.addEventListener("dragstart", startDrag, false);
    crab.addEventListener("dragend", endDrag, false);

    leftbox.addEventListener("dragenter", dragEnter, false);
    leftbox.addEventListener("dragleave", dragLeave, false);
    leftbox.addEventListener("dragover", function(e){e.preventDefault()}, false);
    leftbox.addEventListener("drop", drop, false);
}

function startDrag(e) {
    var pic = '<img id = "crab" src = "http://cdn.shopify.com/s/files/1/1008/1488/products/coolcrab_main_grande.jpg?v=1468102235">';
    e.dataTransfer.setData('Picture', pic);
}

function drop(e) {
    e.preventDefault();
    leftBox.innerHTML = e.dataTransfer.getData('Picture');
}

function dragEnter(e) {
    e.preventDefault();
    leftbox.style.background = "lightseagreen";
    leftbox.style.border = "3px solid #008080"
}

function dragLeave(e) {
    e.preventDefault();
    leftbox.style.background = "red"
    leftbox.style.border = "3px solid orange"
}

function endDrag(e) {
    pic = e.target
    pic.style.visibility = "hidden";
}


window.addEventListener("load", drag, false);
