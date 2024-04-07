
var mainarray = ["Bill", "Phil", "Jill", "Mill"];
paragraph = document.getElementById("outputpara");
update();

function update() {
    let count = 0;
    let output = "";
    while(count < mainarray.length) {
        output += (count + 1) + ". " + mainarray[count] + "<br>";
        count++;
    }
    document.getElementById("outputpara").innerHTML = output;
}

function push() {
    let inputstring = document.getElementById("input").value;
    mainarray.push(inputstring);
    update();
}

function pop() {
    mainarray.pop();
    update();
}

function unshift() {
    let inputstring = document.getElementById("input").value;
    mainarray.unshift(inputstring);
    update();
}

function shift() {
    mainarray.shift();
    update();
}

function arrMap() {
    let inputstring = document.getElementById("input").value;
    mainarray = mainarray.map((value)=> {
        return inputstring + value;
    });
    console.log("arrMapFired");
    update();
}



