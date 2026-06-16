/** Parser converts expressions from infix to postfix */
export default function parser(tokens){
    const postfix=[];
    const Stack=[];
    const top=()=>Stack[Stack.length-1]
    for(let char of tokens){
        if(char==="(")
            Stack.push(char);
        else if("-+/*".includes(char)){
            if(precedence(char)> precedence(top()) )
                Stack.push(char);
            else{
                while(Stack.length!==0 && precedence(top())>=precedence(char)){
                    postfix.push(Stack.pop());
                }
                Stack.push(char);
            }
        }else if(char===')'){
                while(top()!='(')
                    postfix.push(Stack.pop());
                Stack.pop();
        }
        else{
            postfix.push(char);
        }
    }
    while(Stack.length)
        postfix.push(Stack.pop());

    return postfix;
}


function precedence(op) {
    switch (op) {
        case '+':
        case '-':
            return 1;

        case '*':
        case '/':
            return 2;

        default:
            return 0;
    }
}

