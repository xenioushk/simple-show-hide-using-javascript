# Show and Hide HTML Elements Using Javascript

<p>
This example demonstrates a super simple way to show and hide html elements. For the example purpose here we presented text and image elements show and hide example.
</p>

<h3>HTML Code</h3>

<pre>
<code>
<h2>Hide A Text Block</h2>

<p id="text_block">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
<a href="#" id="btn_text_block">Hide Text</a>

<hr>

<h2>Show/Hide An Image</h2>

<picture id="img_block">
    <img src="assets/img/puppy.jpg" alt="cute puppy image">
    <a href='https://www.freepik.com/vectors/baby' class="photo_credit" target="_blank">Baby vector created by catalyststuff - www.freepik.com</a>
</picture>

<a href="#" id="btn_hide_img">Hide Image</a>

</code>
</pre>

<h3>Javascript Code:</h3>

<pre>
<code>
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

</code>
</pre>

Enjoy!