 import {useState} from 'react';
import ButtonIcon from '../Buttons/BtnIcon'
import TaggleLang from '../Buttons/TaggleSwichLanguage'


export default function Header() {

  /*const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState('');

  function toggleLanguage() {
    const newLang = selectedLanguage === 'EN' ? 'AR' : 'EN';
    setSelectedLanguage(newLang);

    // Set message based on the new language
    setMessageText(newLang === 'AR' ? 'عربي' : 'English');
    setShowMessage(true);
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };*/
    

  return (
    <>
        <h2 id={"profName"}>
            <a href={'https://github.com/Band-Red'} target="_blank" rel="noreferrer">Fahad Kaabi</a>
        </h2>


        <div id={"navbar"}>
          <TaggleLang />
          
          {/* <span id={`languageToggle ${selectedLanguage === 'AR' ? 'active' : ''}`} onClick={toggleLanguage}> /}
            {/* Toggle Container /}
            <div className={`toggle-container ${selectedLanguage === 'AR' ? 'active' : ''}`}  >

              {/* Toggle Button /}
              <div className={`toggle-button ${selectedLanguage === 'AR' ? 'active' : ''}`} onClick={toggleLanguage}>
                {selectedLanguage === 'AR' ? (
                  <span className="toggle-text ar">AR</span>
                ) : (
                  <span className="toggle-text en">EN</span>
                )}
              </div>
            </div>
          {/ </span> */}


          
        </div>
    

        <ButtonIcon titleBtn={"View Menu"} typeBtn={"button"} nameBtn={"Menu"}  >
          <svg viewBox={"0 0 36 24"} xmlns={"http://www.w3.org/2000/svg"} >
            <path d={`M 0.5 22 C 0.5 23.1046 1.39543 24 2.5 24 H 24.5 C 25.6046 24 26.5 23.1046 26.5 22 C 26.5 20.8954 25.6046 20 24.5 20 H 2.5 C 1.39543 20 0.5 20.8954 0.5 22 Z M 0.5 12 C 0.5 13.1046 1.39543 14 2.5 14 H 18.5 C 19.6046 14 20.5 13.1046 20.5 12 C 20.5 10.8954 19.6046 10 18.5 10 H 2.5 C 1.39543 10 0.5 10.8954 0.5 12 Z M 2.5 0 C 1.39543 0 0.5 0.895431 0.5 2 C 0.5 3.10457 1.39543 4 2.5 4 H 24.5 C 25.6046 4 26.5 3.10457 26.5 2 C 26.5 0.895431 25.6046 0 24.5 0 H 2.5 Z M 35.091 20.589 C 35.8695 19.8105 35.8704 18.5486 35.0929 17.769 L 29.34 12 L 35.0929 6.23098 C 35.8704 5.4514 35.8695 4.18948 35.091 3.41098 C 34.3117 2.63172 33.0483 2.63172 32.269 3.41098 L 27.2155 8.46447 C 25.2629 10.4171 25.2629 13.5829 27.2155 15.5355 L 32.269 20.589 C 33.0483 21.3683 34.3117 21.3683 35.091 20.589 Z`}></path>
          </svg>
        </ButtonIcon>
    </>
  )
}
