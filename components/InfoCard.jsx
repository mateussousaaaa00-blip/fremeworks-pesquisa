export default function InfoCard({title, children}){
  return (
    <div className="card">
      <h3 style={{marginTop:0}}>{title}</h3>
      <div>{children}</div>
    </div>
  )
}
