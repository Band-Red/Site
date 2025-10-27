import Avatar from '../components/Logo/Avatar';
import BtnAnchor from '../components/Buttons/BtnAnchor';
import SocialMedia from '../components/Buttons/BtnSocialMedia';

export default function Overview() {
  return (
    <>
        {/* <base href='assests/'/> */}
        <div className={"overview-content"}>
            <Avatar boxName={"Avatar-Profile"} name={"profile-image"} path={"../assests/image/logo.png"} description={"Avatar Account"} load={"lazy"} />

            <div className={"Container-text"}>
                <h1>Hi, I'm Fahad Kaabi</h1>
                <p>UI/UX Designer | Front-end Developer | IT Graduate | Co-Founder  @MaysourCo</p>
                    
                <div className={"content-buttons"}>
                    <BtnAnchor name={"cta-button"} page={"#Contact"}>Get in Touch</BtnAnchor>

                    <BtnAnchor name={"cta-button secondary"} page={"#About"} target={"_top"}>View Profile</BtnAnchor>
                </div>
            </div>
        </div>

        <div id={"Container-SocialMedia"}>
            <SocialMedia title={"Linked in"} appName={"linked-in"} link={"http://"} target={"_blank"}>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <rect rx="5"/>
                    <path d="M11.735 13.47C13.2455 13.47 14.47 12.2455 14.47 10.735C14.47 9.2245 13.2455 8 11.735 8C10.2245 8 9 9.2245 9 10.735C9 12.2455 10.2245 13.47 11.735 13.47Z"/>
                    <path d={"M16.6775 15.845V31.0187H21.3887V23.515C21.3887 21.535 21.7612 19.6175 24.2162 19.6175C26.6375 19.6175 26.6675 21.8812 26.6675 23.64V31.02H31.3813V22.6987C31.3813 18.6112 30.5013 15.47 25.7238 15.47C23.43 15.47 21.8925 16.7287 21.2637 17.92H21.2V15.845H16.6775ZM9 15.845H13.7187V31.0187H9V15.845Z"}/>
                </svg>
            </SocialMedia>

            <SocialMedia title={"GitHub"} appName={"GitHub"} link={"https://github.com/Band-Red"} target={"_blank"}>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <rect rx="5"></rect>
                    <path d="M20 5C11.715 5 5 11.8849 5 20.3797C5 27.1736 9.29667 32.9391 15.2582 34.9745C16.0086 35.1133 16.2793 34.6399 16.2793 34.2328C16.2793 33.8674 16.2673 32.899 16.2628 31.6176C12.0894 32.5459 11.2081 29.5545 11.2081 29.5545C10.5284 27.7781 9.54331 27.3047 9.54331 27.3047C8.18227 26.3502 9.64708 26.3718 9.64708 26.3718C11.154 26.4798 11.9436 27.957 11.9436 27.957C13.282 30.3069 15.4567 29.6285 16.3079 29.2353C16.4448 28.2407 16.8358 27.5622 17.2629 27.1783C13.9332 26.7912 10.4321 25.4713 10.4321 19.5763C10.4321 17.9002 11.0171 16.5247 11.9721 15.4515C11.8202 15.0614 11.3014 13.4963 12.121 11.3807C12.121 11.3807 13.3798 10.9659 16.2447 12.9551C17.4683 12.6138 18.7305 12.4396 19.9985 12.437C21.2666 12.4391 22.5288 12.6133 23.7523 12.9551C26.6187 10.9644 27.876 11.3807 27.876 11.3807C28.6956 13.4963 28.1813 15.0614 28.0249 15.4515C28.9874 16.5247 29.5649 17.8986 29.5649 19.5763C29.5649 25.4867 26.0608 26.7851 22.7191 27.1659C23.253 27.6409 23.7342 28.5784 23.7342 30.0124C23.7342 32.0694 23.7162 33.7286 23.7162 34.2328C23.7162 34.6445 23.9839 35.1225 24.7493 34.9714C30.7078 32.9329 35 27.1721 35 20.3797C35 11.8849 28.285 5 20 5Z"/>
                </svg>
            </SocialMedia>

            <SocialMedia title={"instagram"} appName={"instagram"} link={"https://www.instagram.com/band___red?igsh=OGQ5ZDc2ODk2ZA=="} target={"_blank"}>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <rect rx="5"></rect>
                    <g clip-path="url(#clip0_88_179)">
                        <path d="M31.75 11.5C33.5449 11.5 35 10.0449 35 8.25C35 6.45507 33.5449 5 31.75 5C29.9551 5 28.5 6.45507 28.5 8.25C28.5 10.0449 29.9551 11.5 31.75 11.5Z"/>
                    </g>
                    <g clip-path="url(#clip1_88_179)">
                        <path d="M20 11.5C17.3478 11.5 14.8043 12.5536 12.9289 14.4289C11.0536 16.3043 10 18.8478 10 21.5C10 24.1522 11.0536 26.6957 12.9289 28.5711C14.8043 30.4464 17.3478 31.5 20 31.5C22.6522 31.5 25.1957 30.4464 27.0711 28.5711C28.9464 26.6957 30 24.1522 30 21.5C30 18.8478 28.9464 16.3043 27.0711 14.4289C25.1957 12.5536 22.6522 11.5 20 11.5ZM20 27.9944C18.277 27.9944 16.6246 27.3099 15.4063 26.0916C14.1879 24.8732 13.5035 23.2208 13.5035 21.4978C13.5035 19.7748 14.1879 18.1224 15.4063 16.9041C16.6246 15.6858 18.277 15.0013 20 15.0013C21.723 15.0013 23.3754 15.6858 24.5938 16.9041C25.8121 18.1224 26.4965 19.7748 26.4965 21.4978C26.4965 23.2208 25.8121 24.8732 24.5938 26.0916C23.3754 27.3099 21.723 27.9944 20 27.9944Z"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_88_179">
                            <rect/>
                        </clipPath> 
                        <clipPath id="clip1_88_179">
                            <rect/>
                        </clipPath>
                    </defs>
                </svg>

                <img className={"hover"} src={".//assests/icons/in-2.svg"} alt={"instagram"} loading={"lazy"} />
            </SocialMedia>

            <SocialMedia title={"X app account"} appName={"X"} link={"http://"} target={"_blank"}>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <rect rx="5"></rect>
                    <path d="M10 10L17.7007 21.25L10.1631 30H11.8331L18.4382 22.3273L23.6903 30H30L21.9547 18.2473L29.0542 10H27.3893L21.2161 17.1669L16.3097 10H10ZM11.9942 11.0526H15.7568L28.0058 28.9474H24.2432L11.9942 11.0526Z"></path>
                </svg>  
            </SocialMedia>
        </div>
    </>
  )
}
