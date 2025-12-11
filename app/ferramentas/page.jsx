import InfoCard from '../../components/InfoCard'

export default function Ferramentas(){
  return (
    <section>
      <h2>Ferramentas</h2>
      <img src="/logo.svg" alt="ferramentas" style={{width:'100%',maxHeight:180,objectFit:'contain',borderRadius:8}} />

      <div style={{marginTop:16}} className="grid">
        <InfoCard title="Build e Bundlers">
          <p>Ferramentas como Vite, Webpack e esbuild ajudam a empacotar código para produção.</p>
        </InfoCard>

        <InfoCard title="Deploy">
          <p>Plataformas como Vercel e Netlify simplificam colocar sites no ar. Em sala, usar Vercel facilita demonstrações.</p>
        </InfoCard>

        <InfoCard title="Testes">
          <p>Jest, Testing Library e Playwright são exemplos para testes unitários e de integração.</p>
        </InfoCard>

        <InfoCard title="Recomendação">
          <p>Mostrar ferramentas essenciais (build, deploy, testes) em exercícios práticos.</p>
        </InfoCard>
      </div>
    </section>
  )
}
