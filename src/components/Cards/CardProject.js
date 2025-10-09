import BtnView from "../Buttons/BtnView";

export default function CardProject({picture, descriptionPicture, nameProject, description, link, text}) {
  return (
    <span class="project-card">
        <img className={"project-logo"} src={picture} alt={descriptionPicture} loading={"lazy"} />
        
        <div className={"project-content"}>
            <h3>{nameProject}</h3>
            
            <p>{description}</p>
            
            <BtnView 
                link={link}
                children={text}
            />
        </div>
    </span>
  )
}
