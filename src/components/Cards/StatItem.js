
export default function StatItem({icon, children=!null || undefined}) {

  return (
    <div className={"stat-item"}>
        {icon !== null && icon !== undefined && icon !== "" && <i className={"icon"}>{icon}</i>}
        <span>{children}</span>
    </div>
  )
}
