import InfoCard from '../../../components/InfoCard'

export default function Next15(){
  return (
    <section>
      <h2>Next.js 15</h2>
      <img src="/next15.jpg" alt="next15" style={{width:'100%',maxHeight:280,objectFit:'cover',borderRadius:8}} />

      <div style={{marginTop:16}} className="grid">
        <InfoCard title="Pontos Fortes">
          <ul>
            <li>Performance, App Router moderno, melhorias de roteamento e streaming.</li>
          </ul>
        </InfoCard>

        <InfoCard title="Novidades">
          <p>Novas rotinas de compilação, otimizações de rendering, e melhorias no ecossistema (detalhes em sala).</p>
        </InfoCard>

        <InfoCard title="Curiosidades">
          <p>Next.js é mantido pela Vercel e evolui rápido; muitas empresas o utilizam para SSR/SSG e aplicações híbridas.</p>
        </InfoCard>

        <InfoCard title="Empresas usuárias">
          <p>Vercel, Hulu, Ticketmaster, e muitas startups e empresas corporativas.</p>
        </InfoCard>
      </div>
    </section>
  )
}
