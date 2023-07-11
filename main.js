let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
let count = 0;
function changeImage(src) {
    document.querySelector("img").src = "../images/" + src + ".png";
}
 
document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImage("s300_s0131_32_0");
}
document.body.onmouseup = function () {
    changeImage("s300_s0125_30_0");
}

 

  