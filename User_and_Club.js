let slide_page=document.getElementById("slide_page");
let more_button=document.getElementsByClassName("moreinfo").value;
//let close_button=document.getElementById("close_slide_button");
function slide(){
    slide_page.style.left="0";
}

function close_slide(){
    slide_page.style.left="-80%";
}
