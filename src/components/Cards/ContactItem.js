
export default function ContactItem({ icon, title, value, link}) {
  return (
    <div className="contact-item">
        <i className="contact-icon">
            {icon}
        </i>

        <div className="contact-details">
            <h3> {title} </h3>
            <p>
                <a href={{link}}> 
                    {value}
                </a>
            </p>
        </div>
    </div>
  )
}
