import InfoCard from '../../components/InfoCard'

export default function Next15(){
  return (
    <section>
      <h2>Next.js 15</h2>
      <img src="/next15.jpg" alt="next15" style={{width:'100%',maxHeight:280,objectFit:'cover',borderRadius:8}} />

      <div style={{marginTop:16}} className="grid">
        <InfoCard title="Pontos fortes">
          <ul>
            <li>Melhorias de desempenho e rotas modernas (App Router).</li>
            <li>Suporta renderização híbrida (SSR/SSG) e streaming.</li>
          </ul>
        </InfoCard>

        <InfoCard title="Novidades (resumido)">
          <p>Simplificações no roteamento, otimizações de build e melhores ferramentas para dados e streaming.</p>
        </InfoCard>

        <InfoCard title="Uso no mercado">
          <p>Usado por empresas para sites rápidos, páginas com SEO e aplicações híbridas. Bom para demonstrar conceitos em aula.</p>
        </InfoCard>

        <InfoCard title="Recomendação">
          <p>Apresentar Next.js 15 em sala para mostrar práticas atuais de desenvolvimento e deployment.</p>
        </InfoCard>
      </div>
    </section>
  )
}
