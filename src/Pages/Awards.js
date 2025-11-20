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
      eventName: "Hackathon Monshaat 2024", 
      description:`We won first place in the University Entrepreneurship Clubs Hackathon, sponsored by Manshaat, as part of a distinguished team. 
                   The project focused on addressing the real-world challenges facing small and medium-sized enterprises, while promoting innovation and supporting smart decision-making within the startup ecosystem.`,
      eventDate: " December 2024",  
      src: "../assests/image/logo.png", 
      describe: "Hackathon Monshaat 2024",
      /*items: [
        {
          id: 1,
          icon: "",
          text: ""
        },
      ]*/
    },
    {
      id: 2,
      rank: "🥉" ,
      eventName: "Accounting Hackathon 2024", 
      description:`We achieved third place in the Accounting Hackathon organized by King Saud University in collaboration with the Saudi Accounting Association, 
                   as part of a team. The project presented a smart financial solution aimed at improving the efficiency of accounting operations and supporting more accurate financial decision-making.`,
      eventDate: "October 2024",  
      src: "../assests/image/9.jpeg", 
      describe: "Accounting Hackathon" ,
      /*items: [
        {
          id: 1,
          icon: "",
          text: " "
        },
      ]*/
    },
    {
      id: 3,
      rank: "🥇" ,
      eventName: "Senior Project Award 2025", 
      description:`Our team won first place in the Senior Project Award within the Information Technology program at the Department of Computer Science in the Faculty of Engineering and Computer Science,
                   where an innovative graduation project was presented at the 2025 Graduation Projects Exhibition.`,
      eventDate: "May 2025",  
      src: "../assests/image/9.jpeg", 
      describe: "Graduation Projects Exhibition 2025",
      /*items: [
        {
          id: 1,
          icon: "",
          text: " "
        },
      ]*/
    },
   ];

  const Awards = listAwards.map((award)=>{
    return <CardAwards 
              key={award.id} 
              rank={award.rank} 
              eventName={award.eventName} 
              descriptionEvent={award.description}
              eventDate={award.eventDate}
              srcImg={award.src}
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
