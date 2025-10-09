// import {useState} from "react";

export default function TextArea({title, name, value, placeholder, change}) {
  return (
      <div className={"message-Container"}>
        <label htmlFor={name}>{title}</label>
        <textarea 
          id={name} 
          name={name} 
          value={value}
          placeholder={placeholder}  /*اكتب رسالتك هنا...*/
          onChange={change}
          Checked
          required 
        />
      </div>
  )
}



/*
const [message, setMessage] = useState('');

      <div className={"message-Container"}>
        <label htmlFor={name}>{title}:</label>
        <textarea 
          id={name} 
          name={name} 
          value={message}
          placeholder={placeholder}  اكتب رسالتك هنا...
          onChange={(event) => setMessage(event.target.value)}
          required 
        />
      </div>
*/ 