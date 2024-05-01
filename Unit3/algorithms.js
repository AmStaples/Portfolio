
paragraph = document.getElementById("outputpara");

class Leaf {
    constructor(input) {
        this.value = input;
        this.left = null;
        this.right = null;
    }
}
var breadthAr = [];
var depthAr = [];
var tree = new Leaf(" 1 ");
tree.left = new Leaf(" 2 ");
tree.right = new Leaf(" 3 ");
tree.left.left = new Leaf( " 5 ");
tree.left.right = new Leaf(" 4 ");
tree.right.left = new Leaf(" 6 ");
tree.right.right = new Leaf(" 7 ");
tree.left.left.left = new Leaf(" 9 ");
tree.left.left.right = new Leaf(" 8 ");

//      1
//   2      3
//  4  5  6  7
// 8 9


function BFS(Leaf) {

    const queue = [Leaf]; //Add current leaf to queue
    while (queue.length > 0) { //Check if queue is empty
        const current = queue.shift(); //Set current equal to the first leaf.
        breadthAr.push(current.value);  //Add current leaf value to array
        if (current.left) { //check is there is a left leaf
            queue.push(current.left);  //add left leaf to end of queue
        }
        if (current.right) { //check for right leaf
            queue.push(current.right); //add right leaf to end of queue
        }
    }
}

function BFSTrigger() {
    breadthAr = [];
    console.log(breadthAr);
    BFS(tree);
    msg = "";
    count = 0;
    while(count < breadthAr.length) {
        msg += "| " + breadthAr[count] + " ";
        count++;
    }
    document.getElementById("outputpara").innerHTML = msg;
}

function DFS(Leaf) {
    if(!Leaf) return; //End if Leaf does not exist.

    depthAr.push(Leaf.value); // Add to array
    this.DFS(Leaf.left); //DFS left
    this.DFS(Leaf.right); //DFS right
}

function DFSTrigger() {
    depthAr = [];
    console.log(depthAr);
    DFS(tree);
    msg = "";
    count = 0;
    while(count < depthAr.length) {
        msg += "| " + depthAr[count] + " ";
        count++;
    }
    document.getElementById("outputpara").innerHTML = msg;
}