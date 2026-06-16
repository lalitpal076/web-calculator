import Buttons from "./Buttons"
export default function ButtonGrid(props) {
    const arr=['C','(',')','/',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.','='];
    function OnClick(event){
        const value=event.target.dataset.value;
        props.setExpression((prev)=>prev+(value==='C' || value==='='?"":value))
        if(value==='C')
            props.setExpression("");
        else if(value==='=')
            props.runCalculator(props.expression);
    }
  return (

    <>

    <div className="buttons">
        {arr.map((element,id)=>{
            return <Buttons key={id} id={id} element={element} OnClick={OnClick}/>
        })}
    </div>
    </>
  )
}
