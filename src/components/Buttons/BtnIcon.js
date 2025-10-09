export default function BtnIcon({titleBtn, nameBtn, typeBtn, children, click}) {
  return (
    <button title={titleBtn} type={typeBtn} id={`btn-${nameBtn}`} onClick={click}>
      {children}
    </button>
  )
}
