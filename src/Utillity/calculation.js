import tokenizer  from "./tokenizer.js";
import validator  from "./validator.js";
import parser from "./parser.js";
import evaluator from "./evaluator.js";

export default function calculator(paramss){
    let expression=paramss
    // let expression="12+2-34+5/6*43(";
    console.log(typeof expression)
    const token=tokenizer(expression);
    // console.log(token)
    let isbool=validator(token);
    // console.log(isbool);
    if(isbool){
       let postfix=parser(token);
       return evaluator(postfix);
    }
    else
        return "Invalid expression";
}