let text_block = document.getElementById("text_block"),
    btn_text_block = document.getElementById("btn_text_block"),
    img_block = document.getElementById("img_block"),
    btn_hide_img = document.getElementById("btn_hide_img");


btn_text_block.addEventListener("click", function(e) {

    if (text_block.style.display == "none") {
        this.innerText = "Hide Text";
        text_block.style.display = "block";
    } else {
        this.innerText = "Show Text";
        text_block.style.display = "none";
    }
    e.preventDefault();

})


btn_hide_img.addEventListener("click", function(e) {

    if (img_block.style.display == "none") {
        this.innerText = "Hide Image";
        img_block.style.display = "block";
    } else {
        this.innerText = "Show Image";
        img_block.style.display = "none";
    }
    e.preventDefault();

})