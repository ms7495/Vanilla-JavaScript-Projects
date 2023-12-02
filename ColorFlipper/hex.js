function change() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    document.body.style.backgroundColor = "rgb(" + red + ',' + green + ',' + blue + ')';

    let redHex = red.toString(16).padStart(2, '0');
    let greenHex = green.toString(16).padStart(2, '0');
    let blueHex = blue.toString(16).padStart(2, '0');
    document.getElementById('hexed').textContent = "HEX COLOR: " + `#${redHex}${greenHex}${blueHex}`.toUpperCase();
}