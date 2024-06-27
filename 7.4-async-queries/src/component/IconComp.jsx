import './IconComp.css'

export function IconComp({icon,value,title}){
    return(
        <div className="icon-container">
            {value > 0 ? <div className="value">{value > 99 ? "99+" : value}</div> : value === "O" ? <div className="value" style={{padding: "0px 7px 0px 7px", margin: "0px 15px -18.5px 0px",fontSize : 16,height:"40%"}}>•</div> : null}
            <img className="icon" src={icon} alt="icon" />
            <div className="title">{title}</div>
        </div>
    )
}