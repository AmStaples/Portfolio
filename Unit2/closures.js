

const player = (function(name, hp, ...moves) {
    let PlayerName = name;
    let PlayerHp = hp;
    const MovesList = document.querySelector('.moves');
    return {
        getHp() {console.log("HP is " + PlayerHp)},
        getName() {console.log("Name is " + PlayerName)},
        getMoves() {
            for(let i of moves) {
                const p = document.createElement('p')
                p.innerText = i;
                console.log(i);
                MovesList.appendChild(p);
            }
        }
    }
})

let P1 = player("Sora", 50, "Fire", "Blizzard", "Thunder");

P1.getHp();
P1.getName();
P1.getMoves();