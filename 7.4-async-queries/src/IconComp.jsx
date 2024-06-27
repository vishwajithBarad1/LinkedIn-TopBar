import './IconComp.css'
export function IconComp({icon,value=0,title}){
    return(
        <div className="icon-container">
            {value > 0 ? <div className="value">{value > 99 ? "99+" : value}</div> : null}
            <img className="icon" src={icon} alt="icon" />
            <div className="title">{title}</div>
        </div>
    )
}