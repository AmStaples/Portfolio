

class ball {//ball object to store important data about our puck and reset it to the middle.
    constructor(acceleration){
        this.latitude = 362;
        this.longitude = 50;
        this.vertical = "up";
        this.horizontal = "left";
        this.speed = acceleration;
        this.OGspeed = acceleration;
    }
    reset() {
        this.latitude = 362;
        this.longitude = 50;
        this.speed = this.OGspeed;
    }

    accelerate() {
        this.speed += 0.0010;
    }
}

let paused = true;
let matchOver = true;
const puck = document.getElementById("puck");
const p1 = document.getElementById("p1"); // Player bar span 100px and start at 312.5
const p2 = document.getElementById("p2");
let p1pos = 312;
let p2pos = 312;
let NewPuck = new ball(Math.random());


document.addEventListener("keydown", event => { //Pause Switch
    if (event.code === 'Space') {
        if(paused == true) {
            paused = false;
            
        } else {
            paused = true;
        }
    }
})


function puckMove() { // Controls how the puck moves and the conditions when it reaches certain things.
    if(paused == false) { 
        //where does it go?
        if (NewPuck.vertical == "up" && NewPuck.horizontal == "left") {
            NewPuck.latitude-=(10*NewPuck.speed);
            NewPuck.longitude+=NewPuck.speed;
        } else if (NewPuck.vertical == "down" && NewPuck.horizontal == "left") {
            NewPuck.latitude+=(10*NewPuck.speed);
            NewPuck.longitude+=NewPuck.speed;
        } else if (NewPuck.vertical == "up" && NewPuck.horizontal == "right") {
            NewPuck.latitude-=(10*NewPuck.speed);
            NewPuck.longitude-=NewPuck.speed;
        } else {
            NewPuck.latitude+=(10*NewPuck.speed);
            NewPuck.longitude-=NewPuck.speed;
        }
        puck.style.top = NewPuck.latitude + "px";
        puck.style.right = NewPuck.longitude + "%";

        //Flip directions?
        if(NewPuck.latitude <= 10) {
            NewPuck.vertical = "down";
        } else if(NewPuck.latitude >= 800) {
            NewPuck.vertical = "up";
        }

        //Collide with player?
        if (NewPuck.longitude > 95) {
            if (NewPuck.longitude < (p1pos + 150) && NewPuck.longitude > p1pos) {
                NewPuck.horizontal = "right";
                console.log("flipped");
            }
        }

        if (NewPuck.longitude < 0) { //For some reason... adding && NewPuck.longitude > p2pos to the if statement renders p2 invisible to collision.
            if (NewPuck.longitude < (p2pos + 150)) {
                NewPuck.horizontal = "left";
                console.log("tripped flip");
            }
            console.log(p2pos);
            console.log(NewPuck.longitude);
        }

        NewPuck.accelerate();
        //Past a player?
        if(NewPuck.longitude > 120 || NewPuck.longitude < -20) {
            EndGame();
        }

    }

}

function EndGame() { // End and reset the game
    matchOver = true;
    paused = true;
    NewPuck.reset();
    puck.style.top = NewPuck.latitude + "px";
    puck.style.right = NewPuck.longitude + "%";
}
//Gets the party started. an IF statement inside puckMove is locking this out of doing anything. Hit space to release that lock.
let game = setInterval(puckMove, 20);

//Move p1's paddle
document.addEventListener('keydown', (event) => { //uses event listeners to move paddles
    if(event.code === 'KeyW') {
        p1pos -= 40;
    } else if (event.code === 'KeyS') {
        p1pos += 40;
    } else if (event.code === 'KeyK') {
        p2pos += 40;
    } else if (event.code === 'KeyI') {
        p2pos -= 40;
    }

    if (p1pos > 672) {
        p1pos = 672;
    } else if (p1pos < -8) {
        p1pos = -8;
    }
    if (p2pos > 672) {
        p2pos = 672;
    } else if (p2pos < -8) {
        p2pos = -8;
    }

    updatePaddles();
})

function updatePaddles() {
    p1.style.top = p1pos + "px";
    p2.style.top = p2pos + "px";
}