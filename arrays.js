

let squib = [1, 2, 3, 4];

const beans = function (bean) {
    return bean + 1;
}
console.log(beans(squib[0]));



function Choppa(terminator, T1000) {
    if ((terminator % 2) == 0) {
       return T1000(terminator);
    } else console.log("The number is odd.");
}

console.log(Choppa(squib[0], beans));
console.log(Choppa(squib[1], beans));

console.log("And when we put it all together")
for (variable in squib) {
    console.log(Choppa(squib[variable], beans))

}
