import InfoCard from '../../components/InfoCard'

export default function Next15(){
  return (
    <section style={{maxWidth:960, margin:'1.5rem auto'}}>
      <div className="card">
        <div style={{display:'flex',gap:20,alignItems:'flex-start',flexWrap:'wrap'}}>
          <div style={{flex:'1 1 320px',minWidth:260}}>
            <div style={{position:'relative'}}>
              <img
                src="/next15.jpg"
                alt="next15"
                style={{width:'100%',height:240,objectFit:'cover',borderRadius:8,display:'block'}}
              />

              <img
                src="https://images.seeklogo.com/logo-png/44/2/next-js-logo-png_seeklogo-449824.png"
                alt="Next.js logo"
                style={{position:'absolute',left:12,top:12,width:72,height:72,objectFit:'contain',background:'#fff',padding:6,borderRadius:10,boxShadow:'0 6px 18px rgba(0,0,0,0.12)'}}
              />
            </div>
          </div>

          <div style={{flex:'2 1 520px',minWidth:260}}>
            <h2 style={{marginTop:0}}>Next.js 15</h2>
            <p style={{color:'var(--muted)'}}>Resumo simples e direto sobre o Next.js 15 — pontos que interessam para uso em sala de aula.</p>

            <div className="grid" style={{marginTop:12}}>
              <InfoCard title="Pontos fortes">
                <ul>
                  <li>Rotas modernas com App Router.</li>
                  <li>Boas melhorias de desempenho e otimizações de build.</li>
                  <li>Suporte a renderização híbrida (SSR/SSG) e streaming.</li>
                </ul>
              </InfoCard>

              <InfoCard title="Novidades (resumido)">
                <p style={{margin:0}}>Melhor integração com o App Router, ferramentas de dados e melhorias no processo de build.</p>
              </InfoCard>

              <InfoCard title="Uso no mercado">
                <p style={{margin:0}}>Popular em empresas que precisam de páginas rápidas, SEO e renderização híbrida. Útil para demonstrar práticas reais em aula.</p>
              </InfoCard>

              <InfoCard title="Recomendação">
                <p style={{margin:0}}>Apresente o Next.js 15 em exercícios práticos para mostrar conceitos modernos de routing e deploy.</p>
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
