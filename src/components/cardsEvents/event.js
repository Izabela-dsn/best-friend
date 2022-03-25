import "./style.css"

const EventCard = props =>{
    return(
        <li className="cardEvent">
            <div className="names">
                <span>{props.locationNameOrType}</span>
                <p>{props.names}</p>
            </div>
            <div className="time">
                <p>{props.time}</p>
            </div>
        </li>
    )
}

export default EventCard