/* Convert expression into tokens  and return an araye of tokens*/

export default function tokenizer(expression){
const toekn=[];
let currentNumber="";

for(let char of expression){
    if("1234567890.".includes(char))
        currentNumber+=char;
    else{
        if(currentNumber!==""){
            toekn.push(currentNumber);
            currentNumber="";
        }
        toekn.push(char);
    }
}
if(currentNumber!==""){
    toekn.push(currentNumber);
}

return toekn;
}
