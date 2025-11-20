import StatItem from "../Cards/StatItem";

export default function CardAwards({rank=!null, eventName=!null, descriptionEvent=!null, eventDate=!null ,srcImg=!null,describeImg=!null, items=[]}) {

    const statItems = items.map((item) => (
        <StatItem key={item.id} icon={item.icon}>
        {item.text}
        </StatItem>
    ));



  return (

    eventName === "" && descriptionEvent === ""?
    <>{null}</>:
    <div className={"card"}>
        <div className={"card-content"}>
            <div className={"rank-icon"}>
                {rank} 
            </div>
            <h2 className={"Event-Name"}>{eventName}</h2>
            <p className={"Description-Event"}>{descriptionEvent}</p>

            {
            statItems===!null? 
                <div className={"stats"}>
                    {statItems}
                </div>
            : <></>
            }
            <span className={"Event-date"}> {eventDate} </span>
        </div>
        
        <div className={"card-picture"} >
            <img sre={srcImg} alt={describeImg} loading={"lazy"}/>
        </div>
    </div> 
  );
}