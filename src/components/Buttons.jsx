export default function Buttons(props) {
  return (
    <>
    <div id={"btn"+props.id} data-value={props.element} className='button' onClick={(event)=>props.OnClick(event)}>{props.element}</div>
    </>
  )
}
