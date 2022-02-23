const args = process.argv.slice(2);
let rows = args[0];

module.exports.createEquilateral = function(rows){
    if(rows == undefined){
        console.error('Please pass argument');
    }else if(rows != undefined && (rows <2 || rows > 10)){
        console.error('Please pass argument between 2 to 10');
    }else{
        console.log(`Equilateral for ${rows} stars`);
        
        for(let i= 1; i<= rows; i++){
            let star = '';
            let allign = '';
            for(let j= 0; j< i; j++){
                star += '* ';
            }
            star = star.trim();
            for(let k= rows; k>= i; k--){
                allign += ' ';
            }
            console.log(allign+star);
        }
    }
}