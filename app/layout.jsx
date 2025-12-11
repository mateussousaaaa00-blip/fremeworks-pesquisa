import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Mini Wiki de Tecnologia',
  description: 'Pesquisa sobre frameworks, bibliotecas de estilo e Next.js 15'
}

export default function RootLayout({ children }){
  return (
    <html lang="pt-BR">
      <body>
        <div className="container">
          <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'1rem'}}>
            <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
              <img src="/logo.svg" alt="logo" style={{height:40}}/>
              <div>
                <h1 style={{margin:0}}>Mini Wiki de Tecnologia</h1>
                <div style={{fontSize:12,color:'var(--muted)'}}>Nome: Mateus Marcelino — Atividade: Pesquisa</div>
              </div>
            </div>
            <NavBar />
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
