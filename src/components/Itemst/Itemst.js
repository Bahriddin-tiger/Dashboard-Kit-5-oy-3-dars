import "./Item.css"
export const Itemst= ({text,num})=>{
    return(
        <li className="itemst">
            <p className="item-textts">{text}</p>
            <strong className="item-ts">{num}</strong>
        </li>
    )
}