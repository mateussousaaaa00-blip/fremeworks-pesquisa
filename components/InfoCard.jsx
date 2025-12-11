export default function InfoCard({title, children}){
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <div className="muted-small">{children}</div>
    </div>
  )
}
