import StatItem from "../Cards/StatItem";

export default function CardAwards({rank, eventName, descriptionEvent, eventDate,picture ,suorceImg,describeImg, items=[]}) {

    const statItems = items.map((item) => (
        <StatItem key={item.id} icon={item.icon}>
        {item.text}
        </StatItem>
    ));



  return (
    <div className={"card"}>
        <div className={"card-content"}>
            <div className={"rank-icon"}>
                {rank} 
            </div>

            <h2 className={"Event-Name"}>{eventName}</h2>
            <p className={"Description-Event"}>{descriptionEvent}</p>

            <div className={"stats"}>
                {statItems}
                {/* <div className={"stat-item"}>
                    <i className={"icon"}></i>
                    <span>First Place</span>
                </div>
            
                <div className={"stat-item"}>
                    <i className={"fas fa-users"}></i>
                    <span>12 Competitors</span>
                </div>
            
                <div className={"stat-item"}>
                    <i className={"fas fa-globe"}></i>
                    <span>Global Recognition</span>
                </div> */}
            </div>

            <span className={"Event-date"}> {eventDate} </span>
        </div>
        
        <div className={"card-picture"} >
            {picture || <img sre={suorceImg} alt={describeImg} loading={"lazy"}/>}
        </div>
    </div>
  )
}