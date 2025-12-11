export default function Footer(){
  return (
    <footer className="footer">
      <div style={{fontSize:12,color:'var(--muted)'}}>
        © {new Date().getFullYear()} Mini Wiki de Tecnologia
      </div>
    </footer>
  )
}
