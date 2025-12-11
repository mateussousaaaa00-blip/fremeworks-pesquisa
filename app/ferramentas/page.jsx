import InfoCard from '../../components/InfoCard'
import HeroHeader from '../../components/HeroHeader'

export default function Ferramentas(){
    return (
        <main className="container">
                <HeroHeader
                    /* escondemos o logo que contém o texto 'Wiki' para ficar mais limpo */
                    showLogo={false}
                    icon="https://cdn-icons-png.flaticon.com/512/299/299326.png"
                    title="Ferramentas e Recursos"
                    subtitle="Ferramentas úteis para pesquisa e desenvolvimento: editores, CLI, bibliotecas e serviços." 
                />
                
            <section>
                <div className="grid">
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
        </main>
    )
}
