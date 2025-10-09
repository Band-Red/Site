
export default function Introduction({section=!null && !undefined, index, title=!null && !undefined, subTitle=!null && !undefined}) {
  return (
    <span id={`Introduction-${section}`} key={index}>
        <h1 className={"title"}>{title}</h1>
        <p className={"subtitle"}>{subTitle}</p>
    </span>
  )
}
