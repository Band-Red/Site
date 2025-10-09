

export default function InfoSection() {
  return (
    <>
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        
        <h2 className="section-title">تواصل معي</h2>
        
        <div className="contact-info">
            <div className="contact-item">
                <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                </div>

                <div className="contact-details">
                    <h3>البريد الإلكتروني</h3>
                    {/* <p>contact@example.sa</p> */}
                    <p>info@example.sa</p>
                </div>
            </div>
            
            <div className="contact-item">
                <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                </div>

                <div className="contact-details">
                    <h3>الهاتف</h3>
                    <p>+966 5×× ××× ××××</p>
                    {/* <p>+966 555 765 4321</p> */}
                </div>
            </div>
            
            <div className="contact-item">
                <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                </div>

                <div className="contact-details">
                    <h3>العنوان</h3>
                    <p>المملكة العربية السعودية</p>
                    {/* <p> -------------</p> */}
                </div>
            </div>
            
            <div className="contact-item">
                <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                </div>
                
                <div className="contact-details">
                    <h3>ساعات العمل</h3>
                    <p>الأحد - الخميس: 8 ص - 4 م</p>
                    <p>الجمعة - السبت: إجازة</p>
                </div>
            </div>
        </div>
        
        <div className="availability">
            <h4>معلومات الاتصال</h4>
            <p>يمكنك استخدام أي من وسائل الاتصال المذكورة أعلاه للتواصل معي</p>
        </div>  
    </>
  )
}
