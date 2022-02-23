// const args = process.argv.slice(2);
// let rows = args[0];

export let createDiamond= function(rows): void{
    if(rows == undefined){
        console.error('Please pass argument');
    }else if(rows != undefined && (rows <2 || rows > 10)){
        console.error('Please pass argument between 2 to 10');
    }else{
        console.log(`Diamond for ${rows} stars`);

        for(let i= 1; i<= 2*rows-1; i++){
            let star = '';
            let allign = '';
            let loop = (i > rows)? 2*rows-i: i;
            for(let j= 0; j< loop; j++){
                star += '* ';
            }
            star = star.trim();
            for(let k= rows; k>= loop; k--){
                allign += ' ';
            }
            console.log(allign+star);
        }
    }
}