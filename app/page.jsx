import Image from 'next/image'
import InfoCard from '../components/InfoCard'

export default function Home(){
  return (
    <section>
      <div className="hero card" style={{marginBottom:16}}>
        <img src="/logo.svg" alt="logo" />
        <div>
          <h2>Mini Wiki de Tecnologia</h2>
          <p>Atividade: pesquisa sobre frameworks, bibliotecas de estilo e Next.js 15. Navegue pelos tópicos no menu.</p>
        </div>
      </div>

      <div className="grid">
        <InfoCard title="Frameworks">
          <p>Explorações sobre frameworks front-end e meta-frameworks (React, Vue, Svelte e meta-frameworks como Next.js).</p>
        </InfoCard>
        <InfoCard title="Bibliotecas de Estilo">
          <p>Comparações entre Tailwind, Bootstrap, Material UI e escolha recomendada para o curso.</p>
        </InfoCard>
        <InfoCard title="Next.js 15">
          <p>Pontos fortes, novidades e usos no mercado — detalhes na página dedicada.</p>
        </InfoCard>
        <InfoCard title="Ferramentas">
          <p>Ferramentas de build, bundlers, e ecossistema para desenvolvimento moderno.</p>
        </InfoCard>
      </div>
    </section>
  )
}
