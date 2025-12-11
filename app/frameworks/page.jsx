import InfoCard from '../../components/InfoCard'

export default function Frameworks(){
  return (
    <section className="card" style={{maxWidth:960, margin:'1.5rem auto', padding:20}}>
      <div style={{display:'flex',gap:20,alignItems:'flex-start',flexWrap:'wrap'}}>
        <div style={{flex:'1 1 320px',minWidth:260}}>
          <img src="https://cdn-icons-png.flaticon.com/512/2519/2519420.png" alt="frameworks" style={{width:'100%',borderRadius:8,objectFit:'cover'}} />
        </div>

        <div style={{flex:'2 1 480px',minWidth:260}}>
          <h2 style={{marginTop:0}}>Frameworks e Meta-frameworks</h2>

          <div className="grid" style={{marginTop:12}}>
            <InfoCard title="O que é">
              <p style={{margin:0}}>Um framework organiza código e fornece ferramentas prontas. Um meta-framework adiciona convenções para facilitar aplicações (ex.: Next.js sobre React).</p>
            </InfoCard>

            <InfoCard title="Prós">
              <ul>
                <li>Acelera desenvolvimento.</li>
                <li>Padroniza boas práticas.</li>
                <li>Grande comunidade e recursos.</li>
              </ul>
            </InfoCard>

            <InfoCard title="Contras">
              <ul>
                <li>Curva de aprendizado inicial.</li>
                <li>Algumas decisões ficam atreladas ao framework.</li>
              </ul>
            </InfoCard>

            <InfoCard title="Recomendação para sala">
              <p style={{margin:0}}>Adotar React + Next.js por ser amplamente usado e por oferecer conteúdo didático fácil de encontrar.</p>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  )
}
