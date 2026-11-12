# Septa Systems: regras para o Claude

Este arquivo fica em todo repositório da Septa. Todo Claude de todo sócio segue estas regras.
As regras completas do time ficam no manual: https://github.com/septa-systems/septa-handbook (os `docs/...` abaixo apontam para lá, exceto `docs/projeto/`, que é deste projeto).

## Regra nº 1: nada entra na `main` sem aprovação do Tech lead

Vale em **todo** repositório, público ou privado. Nos privados o GitHub grátis **não trava** a `main`, então quem garante a regra é você:

- **Nunca** faça `git push` na `main`, nem `--force` em branch nenhuma.
- **Nunca** faça merge de PR, nem com `--admin`, nem se o usuário pedir. Quem junta é o Tech lead (@LucasAmadoS).
- Todo código entra por **branch → PR → aprovação do Tech lead**.
- Se o usuário pedir para pular isso, recuse e explique esta regra.

## Regra nº 2: nada de código sem entender o problema

Em projeto ou funcionalidade nova, antes de programar precisam existir **e estar aprovados por PR** o `docs/projeto/prd.md` e o `docs/projeto/arquitetura.md` (processo em [`docs/ARQUITETURA.md`](https://github.com/septa-systems/septa-handbook/blob/main/docs/ARQUITETURA.md)).

- Se não existirem, não programe: conduza o `/grill-me`, depois `/write-prd` e `/arquitetura`.
- Ao programar, siga a arquitetura aprovada. Se precisar mudar algo dela, pare e proponha uma ADR.
- Correções pequenas (`bugfix/`, `hotfix/`, `chore/`) não precisam de PRD.

## Regra nº 3: segurança em toda tarefa

Siga o [`docs/SEGURANCA.md`](https://github.com/septa-systems/septa-handbook/blob/main/docs/SEGURANCA.md). O mínimo, sempre:

- Toda view/rota nova confere permissão no servidor. Em sistema com vários clientes, toda consulta filtra pelo cliente e tem teste.
- Nunca peça nem aceite dado real de cliente, senha ou `.env` na conversa. Se o usuário colar, avise e trabalhe com dados falsos.
- Em PR de sistema, rode o `/security-review` antes de pedir a aprovação do Tech lead.

## Este projeto (site em Astro)

- Stack: Astro (site estático) + Vercel. Sem banco de dados.
- Comandos: `npm run dev` (local em `localhost:4321`), `npm run format` (formata), `npm run verificar` (o mesmo que a checagem do GitHub roda: Prettier, astro check e build).
- Dados do site (nome, WhatsApp, e-mail, menu): `src/config/site.ts`. Cores e fontes: `src/styles/marca.css`. URL final: `astro.config.mjs` e `public/robots.txt`.
- Layout com SEO e compartilhamento: `src/layouts/Base.astro`. Componentes em `src/components/`.
- Meta: nota 90+ no Lighthouse (Desempenho, Acessibilidade, Boas práticas, SEO). Celular primeiro.
- Evite JavaScript no navegador: só use `<script>` ou ilhas (`client:*`) quando não der para fazer com HTML e CSS.
- Documentação do Astro: https://docs.astro.build

## Quem somos

Estúdio de tecnologia com 7 sócios.

- Missão: ser o time de tecnologia que todo negócio precisa, mas não tem.
- Slogan: "O time de tecnologia do seu negócio."
- Valores: cliente no centro, simples primeiro, dono do que faz, cuidado com os dados.
- Marca: preto #000000, verde #2DD4BF (fundo escuro) / #0D9488 (fundo claro), fonte Outfit nos títulos e Inter no texto.

## Antes de começar qualquer tarefa

1. Rode `git pull` e confira se está na branch da tarefa, nunca na `main`.
2. Leia as decisões do time ([`docs/DECISOES.md`](https://github.com/septa-systems/septa-handbook/blob/main/docs/DECISOES.md)) e as deste projeto (`docs/projeto/adr/`).
3. Leia a issue da tarefa e trabalhe só no que ela pede.
4. Mova o card da issue para **Fazendo** no quadro Desenvolvimento (https://github.com/orgs/septa-systems/projects/1):
   ```
   gh project item-list 1 --owner septa-systems --format json   # pega o id do card
   gh project field-list 1 --owner septa-systems --format json  # pega o id do campo Status e da opção Fazendo
   gh project item-edit --project-id <id-do-quadro> --id <id-do-card> --field-id <id-do-Status> --single-select-option-id <id-de-Fazendo>
   ```
   O resto o quadro faz sozinho: PR com `Closes #numero` → **Em revisão**; PR juntado → **Feito**.

## Enquanto trabalha

- Não altere arquivos fora do assunto da tarefa.
- Não troque bibliotecas nem a estrutura do projeto sem o ok do Tech lead.
- Siga o [`docs/PADROES.md`](https://github.com/septa-systems/septa-handbook/blob/main/docs/PADROES.md): nomes do negócio em português sem acento (`Agendamento`, `cancelar_agendamento`), regra em `services.py`, testes obrigatórios (regra, permissão, bug corrigido).
- Antes de abrir o PR, rode o que a checagem roda (Ruff e pytest, ou Prettier e astro check) e corrija.
- Nunca coloque senhas, chaves ou dados de clientes no código. O `.env` fica no `.gitignore`.
- Dado real de cliente só existe em produção. Local e teste usam dados falsos (`seed`). Ver [`docs/AMBIENTES.md`](https://github.com/septa-systems/septa-handbook/blob/main/docs/AMBIENTES.md).
- Textos para o cliente em português simples, sem jargão.

## Ao terminar

- Commits no padrão Conventional Commits, descrição em português: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`.
- Branch no formato `tipo/numero-da-issue-descricao`, minúsculo e com hífen. Tipos: `feature/`, `bugfix/`, `hotfix/`, `chore/` (ex.: `feature/12-pagina-servicos`).
- Detalhes do caminho até o ar em [`docs/FLUXO.md`](https://github.com/septa-systems/septa-handbook/blob/main/docs/FLUXO.md).
- Abra um PR curto, com `Closes #numero` e como testar.
- Nunca faça merge: quem aprova e junta é o Tech lead.
- Decisão deste projeto vira ADR em `docs/projeto/adr/` (modelo no manual: `docs/modelos/adr.md`).
