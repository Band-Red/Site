import Introduction from "../components/pragraphs/Introduction";
import Divider from "../components/dividers/DividerInlineopecity";
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

        <Divider />
        
        <div className={"contact-content"}> {/*info-Section */}
            <div className={"info-section"}>
                <InfoSection/>
            </div>
            
            <FormContact />
        </div>
    </>
  )
}
