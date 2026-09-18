# Bíblia365 — Plano de Leitura da Bíblia em 1 Ano (v2)

Reconstrução completa do app original: agora é um PWA em **React + TypeScript + Tailwind CSS**,
100% responsivo (mobile, tablet, notebook, desktop), semântico e modular — mantendo total
compatibilidade com o progresso que os usuários já salvaram na v1 (mesmo domínio).

## O que mudou da v1 para a v2

- **Responsivo de verdade**: layout mobile-first com Tailwind, sem alturas/posições fixas em
  pixel. Testado de telas de ~320px até desktops largos.
- **Semântico**: `<header>`, `<main>`, `<section>`, `<details>/<summary>` nativos para os
  acordeões de categorias, `<label>` envolvendo cada checkbox (alvo de toque maior e mais
  acessível), `<progress>` nativo para a barra de progresso, `aria-label` em todos os botões de
  ícone, `<dialog>` nativo para a ajuda (foco e ESC automáticos).
- **Modular**: cada responsabilidade em seu próprio arquivo (`src/components`, `src/hooks`,
  `src/lib`, `src/data`) em vez de um único `index.html` de 800+ linhas.
- **PWA de verdade**: manifest com ícone maskable, service worker versionado via Workbox
  (`vite-plugin-pwa`), sem o problema de cache "preso" na versão antiga após um novo deploy.
- **Modo claro/escuro** e **controle de tamanho de fonte** (acessibilidade de leitura).
- **Texto do dia confiável**: a versão antiga tentava raspar o HTML de wol.jw.org via proxies
  CORS públicos que já não funcionam. Agora é um link direto e sempre correto para a página do
  dia.
- **Música lofi**: mesma trilha de fundo, mas com um botão explícito de tocar/pausar e volume,
  em vez do hack de "clique em qualquer lugar para desmutar".

## Compatibilidade de dados (importante)

As chaves do `localStorage` continuam **exatamente as mesmas** da v1 (`day0`, `day1`, ...,
`startDate`, `username`). Quem já usa o app no mesmo domínio não perde o progresso ao atualizar.
Os arquivos de backup baixados na v1 também podem ser carregados aqui normalmente.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview   # opcional, para testar o build localmente
```

O build gera a pasta `dist/` com o app, o manifest (`manifest.webmanifest`) e o service worker
(`sw.js`), prontos para deploy.

## Deploy na Vercel

O `vercel.json` já está configurado com o preset Vite. Basta importar o repositório na Vercel
(ou rodar `vercel --prod`) — build command `npm run build`, output `dist`.

## Estrutura

```
src/
  components/   # UI (Header, ProgressSummary, ReadingPlanSection, etc.)
  hooks/        # useReadingProgress, useTheme, useFontScale, useLofiPlayer
  lib/          # storage, exportImport, dates, dailyText
  data/         # readingPlan.ts — os 364 dias do plano
```

## Licença

MIT — veja [LICENSE](LICENSE).
