
export default function CardSpan({id, title, name, logo, Function}) {
  return (
    <span className={title} key={id}>
        <i>{logo}</i>

        <div className={"Content-Define"}>
            <h3 className={"title"}>{name}</h3>
            <p>{Function}</p>
        </div>
    </span>
  )
}
