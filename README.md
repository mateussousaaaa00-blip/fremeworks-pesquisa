# Mini Wiki de Tecnologia — Instruções rápidas

Este projeto é uma Mini Wiki com resumos sobre frameworks, bibliotecas de estilo, Next.js 15 e ferramentas de desenvolvimento. O conteúdo foi escrito de forma simples para uso em sala de aula.

Como usar (Windows / PowerShell):

1. Instalar dependências (faça na pasta do projeto):

```powershell
cd "C:\Users\Aluno DS\Documents\Frameworks"
npm install
```

2. Rodar em modo de desenvolvimento:

```powershell
npm run dev
```

Observações importantes:
- A versão do Next usada aqui é apenas para demonstração. O `npm install` pode apontar avisos de segurança (execute `npm audit` e siga as instruções se for necessário atualizar).
- Se o comando `npm run dev` falhar por falta do pacote `next`, verifique se o `npm install` terminou sem erros.

Estrutura principal de arquivos:
- `app/` — rotas usando App Router (páginas e layouts)
- `components/` — componentes reutilizáveis (NavBar, InfoCard, Footer)
- `public/` — imagens e favicon
- `styles/globals.css` — estilos globais

Se quiser, eu posso:
- Ajustar o conteúdo das páginas para aprofundar um tópico.
- Adicionar exemplos de código e pequenos exercícios para sala de aula.
