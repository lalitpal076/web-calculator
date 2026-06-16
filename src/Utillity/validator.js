export default function validator(tokens){
    console.log(tokens);
    const length=tokens.length;
    const operators=["+","-","*","/"];
    if(startwithOperator(tokens) || endWithOperator(tokens))
        return false;
    else{
        let consecutiveOperator;
        for(let i=0;i<length;i++){
            if(operators.includes(tokens[i])){
                consecutiveOperator=tokens[i+1];
                if(operators.includes(consecutiveOperator)|| consecutiveOperator===")")
                    return false
            }
            else {
                if(tokens[i]==="(" && operators.includes(tokens[i+1])||tokens[i]==="(" && tokens[i+1]===")"){
                    return false;
                }
            }
        }
        let parenthesisCOunt=0;
        for(let i=0;i<length;i++){
            if(tokens[i]==="(")
                parenthesisCOunt++;
            if(tokens[i]===")")
                parenthesisCOunt--;
            if(parenthesisCOunt!==0)
                return false
        }
        return true;
    }
}

function startwithOperator(tokens){
    let operators=["*","/","+",")"];
    if(operators.includes(tokens[0]))
        return true;
}
function endWithOperator(tokens){
    let operators=["*","/","+","(","-"];
    if(operators.includes(tokens[tokens.length-1]))
        return true;
}