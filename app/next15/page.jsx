import InfoCard from '../../components/InfoCard'

export default function Next15(){
  return (
    <section style={{maxWidth:900, margin:'1rem auto'}}>
      <div className="card">
        <div style={{display:'flex',gap:12,alignItems:'flex-start',flexWrap:'wrap'}}>
          <div style={{flex:'0 0 112px', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{width:112, height:112, padding:8, background:'#fff', borderRadius:8, boxShadow:'0 6px 12px rgba(0,0,0,0.12)', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <img
                src="https://images.seeklogo.com/logo-png/44/2/next-js-logo-png_seeklogo-449824.png"
                alt="Next.js logo"
                style={{width:'72px', height:'72px', objectFit:'contain', display:'block'}}
              />
            </div>
          </div>

          <div style={{flex:'1 1 auto',minWidth:200}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <h2 style={{margin:0,fontSize:'1.1rem'}}>Next.js 15</h2>
            </div>
            <p className="muted-small" style={{margin:'6px 0 0 0'}}>Resumo simples e direto sobre o Next.js 15 — pontos úteis para uso em sala de aula.</p>

            <div className="grid-2" style={{marginTop:10}}>
              <InfoCard title="Pontos fortes">
                <ul style={{margin:'6px 0 0 18px',padding:0}}>
                  <li>Rotas modernas com App Router.</li>
                  <li>Melhorias de desempenho e otimizações de build.</li>
                  <li>Suporte a renderização híbrida (SSR/SSG) e streaming.</li>
                </ul>
              </InfoCard>

              <InfoCard title="Novidades">
                <p style={{margin:0}}>Integração com App Router e otimizações no processo de build.</p>
              </InfoCard>

              <InfoCard title="Uso no mercado">
                <p style={{margin:0}}>Empresas usam Next para sites com bom SEO e aplicações híbridas.</p>
              </InfoCard>

              <InfoCard title="Recomendação">
                <p style={{margin:0}}>Usar em exercícios práticos sobre routing, SSR/SSG e deploy.</p>
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
