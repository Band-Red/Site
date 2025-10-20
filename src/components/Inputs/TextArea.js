export default function TextArea({title, name, value, placeholder, change}) {
  return (
      <div className={"message-Container"}>
        <label htmlFor={name}>{title}</label>
        <textarea 
          id={name} 
          name={name} 
          value={value}
          placeholder={placeholder}  /*اكتب رسالتك هنا...*/
          pattern={"[A-Za-z]+[0-9]"}
          maxLength={"500"}
          onChange={change}
          inputMode="text"
          Checked
          required 
        />
      </div>
  )
}
