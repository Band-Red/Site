import ContactItem from "../Cards/ContactItem";

export default function InfoSection() {

    const contactItems = [
        {
        id: 1,
        icon: "",
        title: "Email",
        value: "info@example.sa",
        link: ''
        },
        {
        id: 2,
        icon: "",
        title: "Phone",
        value:  "+966 5×× ××× ××××",
        link: ''
        },
        {
        id: 3,
        icon: "",
        title: "Address",
        value: "Saudi Arabia",
        link: ''
        },
        {
        id: 4,
        icon: "",
        title: "Working hours",
        value: ["Sunday - Thursday: 8 am - 4 pm", "Friday - Saturday: Vacation"],
        link: ''
        },
    ];

    const info = contactItems.map((item) => {
        return <ContactItem key={item.id} icon={item.icon} title={item.title} value={item.value} link={item.link} />
    });

  return (
    <>
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        
        <h2 className="section-title"> Contact </h2>
        
        <div className="contact-info">
            {info}
        </div>
        
        <div className="availability">
            <h4>معلومات الاتصال</h4>
            <p>يمكنك استخدام أي من وسائل الاتصال المذكورة أعلاه للتواصل معي</p>
        </div>  
    </>
  )
}
