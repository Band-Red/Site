

export default function HomeContent() {
  return (
    <div className={"content-buttons"}>
                    <a href={"#contact"} className={"cta-button"}>Get in Touch</a>
                    <a href={"#experience"} className={"cta-button secondary"}>View Experience</a>
                    <a href={"img/CV.pdf"} className={"cta-button secondary"} download={""} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                        <i className={"fas fa-download"}></i>
                        <span>Download CV</span>
                    </a>
                    <a href={""} className={"cta-button secondary"} target={"_blank"} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                        <i className={"fab fa-linkedin"}></i>
                        <span>My LinkedIn</span>
                    </a> 
    </div>
  )
}
