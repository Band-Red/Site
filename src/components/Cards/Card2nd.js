
export default function Card2nd(name, logo, title, description) {
  return (
    <>
      <div className={`card-${name}`}>
          <i>{logo}</i>
          <h3>{title}</h3>
      </div>

      <p>{description}</p>
    </>
  )
}
