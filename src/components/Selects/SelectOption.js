export default function SelectOption({ title, name, value, change, children }) {
  return (
    <div className="select-option-container">
        <label htmlFor={name}>{title}</label>
        <select className={`field-${name}`} id={name} name={name} value={value} onChange={change} required>
            {children}
        </select>
    </div>
  )
}
