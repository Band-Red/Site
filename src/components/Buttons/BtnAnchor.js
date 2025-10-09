
export default function BtnAnchor({name=!null && "", page=!null && "", src =!null && "", target, download, children=!null && ""}) {
  return (
    <>
        <a href={page || src} className={name} target={target} download={download}>{children}</a>
    </>
  )
}
