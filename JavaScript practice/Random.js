function random(coins){

    var rancoins=Math.floor((Math.random()*50)+1);
    var ran1=0;
    var ran2=0;
    var game=0;

    while (coins>0){
        coins=coins-1;
        game=game+1;
        ran1=Math.floor((Math.random()*90)+1);
        ran2=Math.floor((Math.random()*90)+1);
        if(coins==0){
            console.log("game over");
        }

        if(ran1===ran2){
            console.log("Winner")
        }
    }
    return(rancoins)
}

console.log(random(100));