
export default function Input({title, name, type, value, placehold, pattern, minLimit, maxLimit, change}) {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>{title}</label>
      <input className={`field-${name}`} type={type} id={name} name={name} value={value} placeholder={placehold} pattern={pattern} minLength={minLimit} maxLength={maxLimit} onChange={change} required/>
    </div>
  )
}






    /* <>
       <label htmlFor={name} id={`input-${name}`}>
        {title}
       </label>
       <input type={type} id={name} name={name} placeholder={placehold} required/>
     </> */