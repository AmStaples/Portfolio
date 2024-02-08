//Speeeeen Fzero sprites. Thats it thats the tweet.
//use loop to spin the sprite with a tick controling the speed?
//use button to change the vehicle used.
//Use input to control how many spins it does.


let direction = 1; //Depicts what image to display.
let flip = false; //Depicts if the sprite needs to be flipped or not.
let Machine = "falcon"; //Depicts if the sprite displays the golden fox or blue falcon.
const sprite = document.getElementById("sprite"); //Grabs the image and assigns it to sprite




document.getElementById("sprite").addEventListener("click", function() {FoxToggle()});

function FoxToggle () {
    if (Machine == "falcon") {
        Machine = "Fox";
    } else if (Machine == "Fox") {
        Machine = "falcon";
    }
    updateSprite();
}

function updateSprite () {
    //Updates the sprite on the page based on the number passed in.
    //Github is being weird with the filenames... despite working when running from the computer, github returns a 404 when it tries to get the image.
    sprite.src = "Fzeroimg/"+ Machine + direction + ".png";
    if (flip == true) {
        sprite.style.transform = "scaleX(-1)";
    } else sprite.style.transform = "scaleX(1)";
    console.log("Flip is " + flip + ", Direction is " + direction + ", Vehicle is " + Machine);
}

//Turns the sprite right
const turnRight = () => {
    if (flip == false) {
        direction++;
        if (direction == 14) {
            direction = 12;
            flip = true;
        }
    } else if (flip = true) {
        direction--;
        if (direction == 0) {
            direction = 2;
            flip = false;
        }
    }
    updateSprite();
}

//Turns the sprite left
const turnLeft = () => {
    if (flip == true) {
        direction++;
        if (direction == 14) {
            direction = 12;
            flip = false;
        }
    } else if (flip == false) {
        direction--;
        if (direction == 0) {
            direction = 2;
            flip = true;
        }
    }
    updateSprite();
}


//controls the spinning of the sprite.
//Inputs a number from the user to account for how many spins.



function spinloop(count) {
    setTimeout(function() { turnLeft();}, 100 * count);
}

let rotationMulti = 2;
function spin () {
    var count = 0;
    rotationMulti = document.getElementById("spincount").value;
    console.log(rotationMulti);
    while (count < 24 * rotationMulti) {
        spinloop(count);
        count++
    }
};
