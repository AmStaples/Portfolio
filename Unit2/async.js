



async function race() {
    let runner1 = false;
    let runner2 = false;
    let loser;

    const runner1Go = new Promise(function(resolve) { 
        setTimeout(() => {
            loser = "Runner 1";
            console.log("R1 Done");
            resolve(true);
        }, 3000);
    });

    const runner2Go = new Promise(function(resolve) {
        setTimeout(() => {
            loser = "Runner 2";
            console.log("R2 Done");
            resolve(true);
        }, 4000);
    });

    runner1 = await runner1Go;
    runner2 = await runner2Go;
    const results = [runner1, runner2, loser];
   
   
    return results;
}

race().then(function(results) {
    console.log(results[2] + " is the loser")
});