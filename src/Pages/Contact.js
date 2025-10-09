import Introduction from "../components/pragraphs/Introduction";
import InfoSection from "../components/pragraphs/InfoSection";
import FormContact from "../components/Forms/formContact";
export default function Contact() {
  return (
    <>
        <Introduction 
                section={"Contact"} 
                title={"Let's Talk"} 
                subTitle={`I 'm glad you contacted me. You can use the form below to contact me, and I will respond to your inquiry as soon as possible.`}
              />
        
        <div className={"contact-content"}> {/*info-Section */}
            <div className={"info-section"}>
                <InfoSection/>
            </div>
            
            <FormContact />
        </div>
    </>
  )
}

/* <div className={"contact-info"}>
     <div className={"contact-item"}>
         <i className={"fas fa-envelope"}></i>
         <a href={"mailto:info@name.sa"}>info@name.sa</a>
     </div>
     <div className={"contact-item"}>
         <i className={"fas fa-phone"}></i>
         <a href={"https://wa.me/966537430772"} target={"_blank"}>+966 ××× ××× ××××</a>
     </div>
     <div className={"contact-item"}>
         <i className={"fas fa-map-marker-alt"}></i>
         <a href={"#"} target={"_blank"} >
             <span> Saudi Arabia</span>
         </a>
     </div>
     <div className={"contact-item"}>
         <i className={"fas fa-clock"}></i>
         <span>Available for freelance &amp</span>
     </div>
 </div>*/

/*
<h2>Get in Touch</h2>
<div className={"contact-content"}>
    <div className={"contact-info"}>
        <div className={"contact-item"}>
            <i className={"fas fa-envelope"}></i>
            <a href={"mailto:info@haithamhattan.sa"}>info@haithamhattan.sa</a>
        </div>
        <div className={"contact-item"}>
            <i className={"fas fa-phone"}></i>
            <a href={"https://wa.me/966537430772"} target={"_blank"}>+966 53 743 0772</a>
        </div>
        <div className={"contact-item"}>
            <i className={"fas fa-map-marker-alt"}></i>
            <a href={"https://maps.google.com/?q=Riyadh,Saudi+Arabia"} target="_blank" >
                <span>Riyadh, Saudi Arabia</span>
            </a>
        </div>
        <div className={"contact-item"}>
            <i className={"fas fa-clock"}></i>
            <span>Available for freelance &amp; full-time positions</span>
        </div>
    </div>
    <form id={"contact-form"}>
        <div className={"form-group"}>
            <input type={"text"} id={"name"} name={"name"} required={""} placeholder={"Your Name"}/>
        </div>
        <div className={"form-group"}>
            <input type={"email"} id={"email"} name={"email"} required={""} placeholder={"Your Email"}/>
        </div>
        <div className={"form-group"}>
            <textarea id={"message"} name={"message"} required={""} placeholder={"Your Message"}></textarea>
        </div>
        <button type={"submit"} className={"submit-btn"}>
            <i className={"fas fa-paper-plane"}></i>
            <span>Send Message</span>
        </button>
    </form>
</div>
*/
