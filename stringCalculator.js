
function add(string){

    const sep = [',', '\\n'];
    const neg = [];

    if(string.length == 0){
        return 0;
    }

    if (string.match(/^\/\/(\D+)\n/)) {
        sep.push(string.match(/^\/\/(\D+)\n/)[1]);
      }

    const list = string.split(new RegExp(`[${sep.join('')}]`)).filter(item => !isNaN(parseInt(item)));

    let sum = 0;
    for(let i = 0; i < list.length; i++){
        const parsed = parseInt(list[i]);
        if(parsed < 0){
            neg.push(parsed);
        }
        if(parsed > 1000){
            
        }
        else{
            sum += parsed;
        }
    }

    if(neg.length > 0){
        throw `Negatives not allowed: ${negatives.join(', ')}`;
        }

    return sum;
}

module.exports = add;