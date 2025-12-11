import InfoCard from '../../components/InfoCard'

export default function Ferramentas(){
    return (
        <main className="container">
            <section className="hero card" style={{marginBottom:16, padding: '1rem'}}>
                <div style={{display:'flex',alignItems:'center',gap:16}}>
                    <img src="/logo.svg" alt="logo" style={{width:84,height:84,borderRadius:10}}/>
                    <div>
                        <h2 className="hero-title" style={{margin:0}}>Ferramentas</h2>
                        <p className="hero-sub muted-small" style={{marginTop:6}}>Resumo prático sobre ferramentas úteis em desenvolvimento web — build, deploy e testes.</p>
                    </div>
                </div>
            </section>

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
