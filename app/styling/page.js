import InfoCard from '../../../components/InfoCard'

export default function Styling(){
  return (
    <section>
      <h2>Bibliotecas de Estilo</h2>
      <img src="/styling.jpg" alt="styling" style={{width:'100%',maxHeight:280,objectFit:'cover',borderRadius:8}} />

      <div style={{marginTop:16}} className="grid">
        <InfoCard title="Exemplos">
          <p>Tailwind CSS, Bootstrap, Material UI, Styled Components.</p>
        </InfoCard>

        <InfoCard title="Escolha e porquê">
          <p>Escolheríamos Tailwind para o curso: rápido para prototipagem, utilitário, grande adoção e flexibilidade.</p>
        </InfoCard>

        <InfoCard title="Prós e Contras">
          <ul>
            <li>Tailwind: prós — produtividade; contras — classes verbosas.</li>
            <li>Material UI: prós — componentes prontos; contras — maior bundle.</li>
          </ul>
        </InfoCard>

        <InfoCard title="Empresas que usam">
          <p>Empresas grandes usam diferentes soluções: Tailwind (Cloudflare, GitHub em partes), Material UI (Google internamente em MD), Bootstrap (diversos projetos).</p>
        </InfoCard>
      </div>
    </section>
  )
}
