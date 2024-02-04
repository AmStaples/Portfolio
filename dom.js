


const maindiv = document.querySelector(".bigdiv");



for (let index = 0; index < 5; index++) {
    const newp = document.createElement("p");
    const newtext = document.createTextNode("One too many for a quartet");
    newp.appendChild(newtext);
    maindiv.appendChild(newp);
}

const changeColor = () => {
    var background = document.querySelector("div");
    background.style.backgroundColor = "bisque";
    var secondbackground = document.querySelector("body");
    secondbackground.style.backgroundColor = "black";
}