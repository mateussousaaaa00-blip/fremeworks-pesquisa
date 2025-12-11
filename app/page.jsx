import InfoCard from '../components/InfoCard'

export default function Home(){
  return (
    <section>
      <div className="hero card" style={{marginBottom:16}}>
        <img src="/logo.svg" alt="logo" />
        <div>
          <h2>Mini Wiki de Tecnologia</h2>
          <p>Resumos curtos e claros sobre tecnologias de mercado. Conteúdo pensado para professores — linguagem simples e direta.</p>
        </div>
      </div>

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
  )
}
