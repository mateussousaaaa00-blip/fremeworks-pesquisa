import InfoCard from '../../components/InfoCard'

export default function Styling(){
  return (
    <section>
      <h2>Bibliotecas de Estilo</h2>
      <img src="/styling.jpg" alt="styling" style={{width:'100%',maxHeight:280,objectFit:'cover',borderRadius:8}} />

      <div style={{marginTop:16}} className="grid">
        <InfoCard title="Principais opções">
          <p>Tailwind, Bootstrap, Material UI e Styled Components — diferenças em abordagem e uso.</p>
        </InfoCard>

        <InfoCard title="Escolha sugerida">
          <p>Para aulas, Tailwind é uma boa opção: rápido para protótipos e fácil de justificar em exercícios práticos.</p>
        </InfoCard>

        <InfoCard title="Prós e contras">
          <ul>
            <li>Tailwind: prós — produtividade; contras — sintaxe extensa em classes.</li>
            <li>Material UI: prós — componentes prontos; contras — maior complexidade de tema.</li>
          </ul>
        </InfoCard>

        <InfoCard title="Uso no mercado">
          <p>Empresas adotam soluções diferentes conforme necessidade: Tailwind vem crescendo; Material UI é comum em dashboards.</p>
        </InfoCard>
      </div>
    </section>
  )
}
