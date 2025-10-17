import Introduction from "../components/pragraphs/Introduction"
import CardAwards from "../components/Cards/CardAwards";
import Divider from "../components/dividers/DividerInlineopecity";


export default function Awards() {

  const listIntroduces = [
      {
        id: 1,
        title: "Honer & Awards",
        subTitle: "Displays my most notable professional and academic achievements. Whether individually or by working within a team"
      }
  ];

  const listAwards = [
    {
      id: 1,
      rank: "🥇" ,
      eventName: "Hackathon Creative Design Awards", 
      description:`Won the International Creative Design Award 2023 for designing user interfaces for an innovative educational app,
                         distinguished by simplicity, aesthetics, and ease of use.`,
      eventDate: "January 2023",  
      picture: { src: ".//", describe: "" },
      items: [
        {
          id: 1,
          icon: "",
          text: "dve"
        },
      ]
    },
    {
      id: 2,
      rank: "1st" ,
      eventName: "Hackathon Creative Design Awards", 
      description:`Won the International Creative Design Award 2023 for designing user interfaces for an innovative educational app,
                         distinguished by simplicity, aesthetics, and ease of use.`,
      eventDate: "January 2023",  
      src: ".//", 
      describe: "" ,
      items: [
        {
          id: 1,
          icon: "",
          text: "oe"
        },
      ]
    },
    {
      id: 3,
      rank: "3rd" ,
      eventName: " Accounting Hackathon", 
      description:`Won the International Creative Design Award 2023 for designing user interfaces for an innovative educational app,
                         distinguished by simplicity, aesthetics, and ease of use.`,
      eventDate: "January 2023",  
      src: ".//", 
      describe: "",
      items: [
        {
          id: 1,
          icon: "",
          text: "gd"
        },
      ]
    },
    {
      id: 4,
      rank: "🥉" ,
      eventName: "Hackathon Creative Design Awards", 
      description:`Won the International Creative Design Award 2023 for designing user interfaces for an innovative educational app,
                         distinguished by simplicity, aesthetics, and ease of use.`,
      eventDate: "January 2023",  
      src: ".//", 
      describe: "",
      items: [
        {
          id: 1,
          icon: "",
          text: "sssdf"
        },
      ]
    },
    {
      id: 5,
      rank: "1st" ,
      eventName: "Hackathon Creative Design Awards", 
      description:`Won the International Creative Design Award 2023 for designing user interfaces for an innovative educational app,
                         distinguished by simplicity, aesthetics, and ease of use.`,
      eventDate: "January 2023",  
      src: ".//", 
      describe: "",
      items: [
        {
          id: 1,
          icon: "",
          text: "sd"
        },
        {
          id: 2,
          icon: "",
          text: "sd"
        },
        {
          id: 3,
          icon: "",
          text: "sd"
        },
      ]
    },
   ];

  const Awards = listAwards.map((award)=>{
    return <CardAwards 
              key={award.id} 
              rank={award.rank} 
              eventName={award.eventName} 
              descriptionEvent={award.description}
              eventDate={award.eventDate}
              suorceImg={award.src}
              describeImg={award.describe}
              items={award.items} 
            />
  });

  const introducePage = listIntroduces.map((introduce) => {
          return <Introduction section={"Awards"} index={introduce.id} title={introduce.title} subTitle={introduce.subTitle} />
        });

  return (
    <>
      {introducePage}

      <Divider/>
    
      <span id={"carousel-container"}>
          <div className={"carouselAwards"}>

            {Awards}
        
          </div>
      </span>
    </>
  )
}
