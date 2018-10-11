
function add(string){

    const sep = [',', '\\n'];
    const neg = [];

    if(string.length == 0){
        return 0;
    }


    const list = string.split(new RegExp(`[${sep.join('')}]`));

    let sum = 0;
    for(let i = 0; i < list.length; i++){
        const parsed = parseInt(list[i]);
        if(parsed < 0){
            neg.push(parsed);
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