const EventCard = props =>{
    return(
        <li>
            <div className="names">
                <span>{props.typeOfHistory}</span>
                <p>{props.names}</p>
            </div>
            <div className="time">
                <p>{props.time}</p>
            </div>
        </li>
    )
}

export default EventCard