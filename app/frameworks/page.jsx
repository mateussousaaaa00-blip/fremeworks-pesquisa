import InfoCard from '../../../components/InfoCard'

export default function Frameworks(){
  return (
    <section>
      <h2>Frameworks e Meta-frameworks</h2>
      <img src="/frameworks.jpg" alt="frameworks" style={{width:'100%',maxHeight:280,objectFit:'cover',borderRadius:8}} />

      <div style={{marginTop:16}} className="grid">
        <InfoCard title="Definição">
          <p>Framework: conjunto estruturado de bibliotecas que define padrões. Meta-framework: ferramenta que adiciona convenções e funcionalidades (ex: Next.js para React).</p>
        </InfoCard>

        <InfoCard title="Prós e Contras">
          <ul>
            <li>Prós: produtividade, padrões, comunidade.</li>
            <li>Contras: curva de aprendizado, lock-in de arquitetura.</li>
          </ul>
        </InfoCard>

        <InfoCard title="Uso no mercado">
          <p>React, Angular e Vue dominam o frontend; meta-frameworks como Next.js e Nuxt.js são populares para SSR/SSG e produtividade.</p>
        </InfoCard>

        <InfoCard title="Escolha para a sala">
          <p>Usaremos React + Next.js (meta-framework) por sua adoção e material didático disponível.</p>
        </InfoCard>
      </div>
    </section>
  )
}
