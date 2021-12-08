var picbox = document.getElementById("myPicbox");


var img1 = document.getElementById("image1")
var img2 = document.getElementById("image2")
var img3 = document.getElementById("image3")
var img4 = document.getElementById("image4")


var boxImg = document.getElementById("imgs");
var captionText = document.getElementById("caption");


img1.onclick = function(){
    picbox.style.display = "block";
    boxImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    picbox.style.display = "block";
    boxImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function(){
    picbox.style.display = "block";
    boxImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img4.onclick = function(){
    picbox.style.display = "block";
    boxImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function(){
    picbox.style.display = "none";
}