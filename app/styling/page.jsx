import InfoCard from '../../components/InfoCard'

export default function Styling(){
  return (
    <section style={{ maxWidth: 980, margin: '0 auto', padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}><img
          src="https://cdn-icons-png.flaticon.com/512/2784/2784504.png"
          alt="logo"
          style={{width: 56,height: 56,objectFit: 'cover',borderRadius: 12,boxShadow: '0 6px 18px rgba(0,0,0,0.12)',background: '#fff',padding: 6}}
        />  
        <div>
          <h2 style={{ margin: 0, fontSize: 20 }}>Bibliotecas de Estilo</h2>
          <p style={{ margin: '4px 0 0', color: '#555', fontSize: 13 }}>
            Visão geral rápida e sugestões para uso em aulas e projetos
          </p>
        </div>
      </div>
      <div style={{ marginTop: 18 }} className="grid">
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
