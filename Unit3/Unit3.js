
class Leaf {
    constructor(input) {
        this.value = input;
        this.left;
        this.right;
        this.attribute1 = "this is attribute1 of " + this.value;
        this.attribute2 = "this is attribute2 of " + this.value;
    }
}

var tree = new Leaf("1");
tree.left = new Leaf("2");
tree.right = new Leaf("3");
tree.left.left = new Leaf( "4");
tree.left.right = new Leaf("5");
tree.right.left = new Leaf("6");
tree.right.right = new Leaf("7");
tree.left.left.left = new Leaf("8");
tree.left.left.right = new Leaf("9");

//      1
//    2     3
//  4  5  6  7
// 8 9


function modifiedBFS(Leaf, target) {
    level = target; //Set the level of breadth we want to reach. Higher number is farther down.
    const queue = [Leaf]; //Add current leaf to queue
    parent = [];
    children = [];
    temp = []; //Hold the next queue in line.
    count = 0;
    while(count < level) {
        while (queue.length > 0) { //Check if queue is empty
            const current = queue.shift(); //Set current equal to the first leaf.
            parent.push(current.value);  //Add current leaf value to parents
            if (current.left) { //check is there is a left leaf
                temp.push(current.left);  //add left leaf to end of temp
               children.push(current.left.value); //and value to children array
            }
            if (current.right) { //check for right leaf
                temp.push(current.right); //add right leaf to end of temp
                children.push(current.right.value);
          }
        }//set queue equal to temp for the next BFS
         while (temp.length > 0) {
             queue.push(temp.shift()); //Remove from temp and place into queue
        }
        if (count != (level - 1)) { //If count isn't one less then level
            while(parent.length > 0) {
                parent.shift(); //Empty the parent array of its values
            }
            while(children.length > 0) {
                children.shift(); //Empty the children array of its values.
            }
        }
    count++;
}
    var msg = "";
    count = 0;
    parent.forEach((parent) => { //anonymous function used by foreach statement.
        msg += parent + " (" + children[count] + ", " + children[(count+1)] + ")<br>";
        count += 2;
    }) //Change to modify output paragraph.
    return msg;
}


function BFS(Leaf, target) {
    const queue = [Leaf]; //Add current leaf to queue
    while (queue.length > 0) { //Check if queue is empty
        const current = queue.shift(); //Set current equal to the first leaf.
        if (current.value == target) {
            return current;
        }
        //breadthAr.push(current.value);  //Add current leaf value to array
        if (current.left) { //check is there is a left leaf
            queue.push(current.left);  //add left leaf to end of queue
        }
        if (current.right) { //check for right leaf
            queue.push(current.right); //add right leaf to end of queue
        }
    }
}

function MBFSTrigger() {
    let result = modifiedBFS(tree, document.getElementById("inputfield").value);
    document.getElementById("outputpara").innerHTML = result;
}

function BFSTrigger() {
    let BFSResult = BFS(tree, document.getElementById("inputfield").value);
    var msg = ("Value: " + BFSResult.value + "<br>Attribute 1: " + BFSResult.attribute1 + "<br>Attribute 2: " + BFSResult.attribute2);
    
    try {
        msg += "<br> Child.left: " + BFSResult.left.value;
    } catch(err) {
        msg += "<br> Child.left: No child in slot"; 
    }
    try {
        msg += "<br> Child.right: " + BFSResult.right.value;
    } catch(err) {
        msg += "<br> Child.right: No child in slot";
    }
    document.getElementById("outputpara").innerHTML = msg;
}