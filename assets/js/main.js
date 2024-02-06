window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})


let subMenuP = document.getElementById("subMenuP")

function menuP(){
    subMenuP.classList.toggle("activo")
}

