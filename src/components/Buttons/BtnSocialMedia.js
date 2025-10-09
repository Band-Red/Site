

export default function BtnSocialMedia({title, appName=!null, link=!null, target, children=!null}) {
  return (
    <span className={appName}>
        <a href={link} target={target} title={title}>
            {children}
        </a>
    </span>
  )
}
