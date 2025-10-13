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

  /* const listAwards = [
    {
      
    }
   ];*/

  const introducePage = listIntroduces.map((introduce) => {
          return <Introduction section={"Awards"} index={introduce.id} title={introduce.title} subTitle={introduce.subTitle}/>
        });

  return (
    <>
      {introducePage}

      <Divider/>
    
      <span id={"carousel-container"}>
          <div className={"carousel"}>
            <CardAwards  
              rank={"1st"} 
              eventName={"Hackathon Creative Design Awards"} 
              descriptionEvent={`Won the International Creative Design Award 2023 for designing user interfaces for an innovative educational app, distinguished by simplicity, aesthetics, and ease of use.`} 
              eventDate={"January 2023"}  
              suorceImg={".//"} 
              describeImg={""} 
            />
            <CardAwards  
              rank={"1st"} 
              eventName={"Hackathon Creative Design Awards"} 
              descriptionEvent={`Won the International Creative Design Award 2023 for designing user interfaces for an innovative educational app, distinguished by simplicity, aesthetics, and ease of use.`} 
              eventDate={"January 2023"}  
              suorceImg={".//"} 
              describeImg={""} 
            />
            <CardAwards  
              rank={"1st"} 
              eventName={"Hackathon Creative Design Awards"} 
              descriptionEvent={`Won the International Creative Design Award 2023 for designing user interfaces for an innovative educational app, distinguished by simplicity, aesthetics, and ease of use.`} 
              eventDate={"January 2023"}  
              suorceImg={".//"} 
              describeImg={""} 
            />
            <CardAwards  
              rank={"1st"} 
              eventName={"Hackathon Creative Design Awards"} 
              descriptionEvent={`Won the International Creative Design Award 2023 for designing user interfaces for an innovative educational app, distinguished by simplicity, aesthetics, and ease of use.`} 
              eventDate={"January 2023"}  
              suorceImg={".//"} 
              describeImg={""} 
            />
            <CardAwards  
              rank={"1st"} 
              eventName={"Hackathon Creative Design Awards"} 
              descriptionEvent={`Won the International Creative Design Award 2023 for designing user interfaces for an innovative educational app, distinguished by simplicity, aesthetics, and ease of use.`} 
              eventDate={"January 2023"}  
              suorceImg={".//"} 
              describeImg={"ss"} 
            />
          </div>
      </span>
    </>
  )
}
