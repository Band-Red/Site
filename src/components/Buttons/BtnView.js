
export default function BtnView(link, children) {
  return (
    <a href={link} className={"project-View"}>
        {children}
        <svg viewBox={"0 0 21 13"} xmlns={"http://www.w3.org/2000/svg"}>
            <path d={`M11.1538 2L19 6.5L11.1538 11M17.9103 6.5H2`} />
        </svg>
    </a>
  )
}
