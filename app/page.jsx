import InfoCard from '../components/InfoCard'

export default function Home(){
  return (
    <main className="container">
      <section className="hero card" style={{marginBottom:16, padding: '1.25rem'}}>
        <div style={{flex:1}}>
          <h1 className="hero-title">Mini Wiki de Tecnologia</h1>
          <p className="hero-sub muted-small">Resumos curtos e objetivos — pensado para professores e estudantes.</p>
          <p className="muted-small" style={{marginTop:12}}>Explicações diretas, exemplos práticos e indicações de uso no mercado. Use esta coleção para preparar aulas, consultoria ou revisão rápida.</p>
          <div>
            <a href="/frameworks" className="cta" aria-label="Começar pela pesquisa">Começar pela pesquisa ➜</a>
          </div>
        </div>

        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src="/logo.svg" alt="Logo Mini Wiki" style={{width:180,borderRadius:10}} />
        </div>
      </section>

      <section>
        <div className="grid">
          <InfoCard title="Frameworks">
            <p>O que são, exemplos (React, Angular, Vue) e quando usar.</p>
          </InfoCard>
          <InfoCard title="Bibliotecas de Estilo">
            <p>Comparação prática entre Tailwind, Bootstrap e Material UI.</p>
          </InfoCard>
          <InfoCard title="Next.js 15">
            <p>Principais pontos do Next.js 15 e por que é relevante para aulas.</p>
          </InfoCard>
          <InfoCard title="Ferramentas">
            <p>Ferramentas úteis no dia a dia do desenvolvimento web (build, deploy, testes).</p>
          </InfoCard>
        </div>
      </section>
    </main>
  )
}
