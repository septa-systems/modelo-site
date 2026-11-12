# Modelo de site da Septa Systems

Ponto de partida de todo site e landing page da Septa: **Astro + Vercel**, já com SEO, fontes locais, celular primeiro e as regras do time.

## Começar um site novo

1. Clique em **Use this template → Create a new repository** (dono: `septa-systems`).
   Nome: `site-<cliente>` (ex.: `site-padaria-joao`).
2. No repositório novo:
   - Settings → Rules: crie a regra da `main` igual à do manual (PR + aprovação do Tech lead + checagens "Padrão do time" e "Site").
   - Settings → Code security: ligue Dependabot e Secret scanning.
   - Settings → General: só "Squash merge" e "Automatically delete head branches".
3. Troque os dados de exemplo:
   - `src/config/site.ts`: nome, descrição, WhatsApp, e-mail, Instagram, cidade.
   - `src/styles/marca.css`: cores e fontes do cliente.
   - `astro.config.mjs` e `public/robots.txt`: a URL final.
   - `public/compartilhar.png`: imagem de 1200x630 que aparece ao compartilhar o link.
   - `public/favicon.svg`: ícone do cliente.
4. Antes de programar: `docs/projeto/` (entrevista, PRD e arquitetura). Ver `docs/projeto/README.md`.
5. Ligue o repositório no **Vercel** (Add New → Project → importar do GitHub). Cada PR ganha um link de prévia e a `main` vai para o ar.

## Rodar no PC

Precisa de **Node 22.23.4 ou mais novo** (`node --version`).

```bash
npm install
npm run dev          # abre em http://localhost:4321
```

| Comando             | O que faz                                                             |
| ------------------- | --------------------------------------------------------------------- |
| `npm run dev`       | site local, atualiza ao salvar                                        |
| `npm run format`    | formata todo o código                                                 |
| `npm run verificar` | roda o mesmo que a checagem do GitHub (Prettier, astro check e build) |
| `npm run build`     | gera o site final em `dist/`                                          |

Opcional: `pip install pre-commit && pre-commit install` formata sozinho a cada commit.

## Estrutura

```
src/
├── config/site.ts       # dados do cliente
├── styles/marca.css     # cores e fontes
├── styles/global.css    # estilos base
├── layouts/Base.astro   # <head> com SEO e compartilhamento
├── components/          # Topo, Rodape, BotaoWhatsApp
└── pages/               # index.astro, 404.astro
docs/projeto/            # entrevista, PRD, arquitetura, ADRs
```

## Regras do time

Tudo em [septa-handbook](https://github.com/septa-systems/septa-handbook). O Claude segue o `CLAUDE.md` deste repositório.
