# Modelo de site da Septa Systems

Ponto de partida de todo site e landing page da Septa: **Astro + Cloudflare**, já com SEO, fontes locais, celular primeiro e as regras do time.

## Começar um site novo

1. O Tech lead cria o repo pelo script do manual, que já configura merge, segurança, quadro e o acesso do time `socios` (proteção automática da `main` só em repo público; o de cliente é privado e segue a Regra nº 1 do `CLAUDE.md`) ([docs/NOVO-REPO.md](https://github.com/septa-systems/septa-handbook/blob/main/docs/NOVO-REPO.md)):
   ```bash
   scripts/novo-repo.sh site-<cliente> site     # ex.: site-padaria-joao
   ```
   Não use só o botão "Use this template": ele copia o código, mas não a configuração.
2. Baixe: `gh repo clone septa-systems/site-<cliente>`.
3. Troque os dados de exemplo:
   - `src/config/site.ts`: nome, descrição, WhatsApp, e-mail, Instagram, cidade.
   - `src/styles/marca.css`: cores e fontes do cliente.
   - `astro.config.mjs` e `public/robots.txt`: a URL final.
   - `public/compartilhar.png`: imagem de 1200x630 que aparece ao compartilhar o link.
   - `public/favicon.svg`: ícone do cliente.
4. Antes de programar: `docs/projeto/` (entrevista, PRD e arquitetura). Ver `docs/projeto/README.md`.
5. Ligue o repositório na **Cloudflare**, na conta da Septa (Workers & Pages → criar → importar do GitHub; build `npm run build`, pasta `dist`). Cada PR ganha um link de prévia e a `main` vai para o ar. O domínio do cliente aponta para a Cloudflare (ver `docs/AMBIENTES.md` do manual). Este passo será detalhado depois do 1º teste, no site da Septa.

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
