import InfoCard from '../../components/InfoCard'

export default function Ferramentas(){
return (
    <section style={{ padding: 16, maxWidth: 1100, margin: '0 auto' }}>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                flexWrap: 'wrap',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/126/126391.png"
                    alt="ícone ferramentas"
                    style={{
                        width: 64,
                        height: 64,
                        objectFit: 'cover',
                        borderRadius: 12,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        background: 'linear-gradient(180deg, #fff, #f6f6f8)',
                        padding: 8,
                    }}
                />
                <h2 style={{ margin: 0, fontSize: 24, letterSpacing: 0.2 }}>Ferramentas</h2>
            </div>
        </div>

        <div style={{ marginTop: 20 }} className="grid">
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
)
}
