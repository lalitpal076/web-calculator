export default function evaluator(post){
    const postfix=post;
    const OprndStack=[];
    // const top=()=>OprndStack[OprndStack.length-1]
    for(let token of postfix){
        if(!"+-*/".includes(token))
            OprndStack.push(Number(token));
        else{
            let a=OprndStack.pop();
            let b=OprndStack.pop();
            switch(token){
                case "+":
                    OprndStack.push(b+a);
                    break;
                case "-":
                    OprndStack.push(b-a);
                    break;
                case "*":
                    OprndStack.push(b*a);
                    break;
                case "/":
                    OprndStack.push(b/a);
                    break;
            }
        }

    }
    return OprndStack.pop();
}
