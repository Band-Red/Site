import {useState} from 'react';

export default function TaggleSwitchLanguage({children="EN"}) {

    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    // const [showMessage, setShowMessage] = useState(false);
    // const [messageText, setMessageText] = useState('');

    function SwitchLanguage() {
        const newLang = selectedLanguage === 'EN' ? 'AR' : 'EN';
        setSelectedLanguage(newLang);
    };

  return (
    // Toggle Container for Switch Language
    <span className={`toggle-container ${selectedLanguage === 'AR' ? 'active' : ''} `}>
      
      {/* Toggle Button for Switch Language*/}
      {/* <button className={`toggle-button ${selectedLanguage === 'AR' ? 'active' : ''}`} type={'button'} value={selectedLanguage} onClick={SwitchLanguage} onChange={selectedLanguage === 'AR' ?  children="عربي" : children="EN"}> */}
      <button className={`toggle-button ${selectedLanguage === 'AR' ? 'active' : ''}`} type={'button'} value={selectedLanguage} onClick={SwitchLanguage} onChange={(event) => {setSelectedLanguage(event.target.value) }}>
        {selectedLanguage === 'AR' ?  children="عربي" : children="EN"}
      </button>
    </span>
  )
}

/*
Set message based on the new language
setMessageText(newLang === 'AR' ? 'عربي' : 'English');
setShowMessage(true);
    
/ Hide message after 3 seconds
setTimeout(() => {
  setShowMessage(false);
}, 3000);


Message Display
{showMessage && (
  <div id={"messageContainer"} >
    <div id={"messageBox"} >
      <h2 id={"messageText"} >{messageText}</h2>
    </div>
  </div>
)} */
