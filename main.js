let openbtn = document.getElementById("open");
let closebtn = document.getElementById("close");
let container = document.getElementsByClassName("container")[0];


closebtn.onclick = function () {
    container.classList.add("hide");
    this.classList.add("hide");
    openbtn.classList.remove("hide");
}

openbtn.onclick = function () {
    this.classList.add('hide');
    closebtn.classList.remove("hide");
    container.classList.remove("hide");
}
