

export default function ButtonText({title, name, type, children}) {
  return (
    <button title={title} id={`btn-${name}`} type={type}>
      {children}
    </button>
  )
}
