import "./ItemMain.css"
export const Itemmain = ({text,num}) =>{
    return(
        <li className="itemmain">
            <p className="main-item-text">
{text}
            </p>
            <strong className="main-item-num">
{num}
            </strong>
        </li>
    )
}