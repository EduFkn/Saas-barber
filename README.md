# FKN Barber 💈

Plataforma moderna de agendamento para barbearias, desenvolvida com as melhores tecnologias do mercado.

## ✨ Features

- **Busca rápida:** Encontre serviços como Corte, Barba, Massagem, Sobrancelha e mais, com ícones ilustrativos.
- **Agendamento online:** Reserve seu horário em barbearias recomendadas e populares.
- **Autenticação segura:** Login com NextAuth.
- **Visual moderno:** UI responsiva, dark mode, animações e componentes Radix UI.
- **Banco de dados real:** PostgreSQL com seed de barbearias e serviços.
- **Deploy fácil:** Pronto para Vercel.

## 🖼️ Preview

![Preview do FKN Barber](https://fkn-barber.vercel.app/)

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [NextAuth](https://next-auth.js.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

## ⚡ Como rodar localmente

```bash
git clone https://github.com/seu-usuario/fkn-barber.git
cd fkn-barber
npm install
# Configure o .env com sua DATABASE_URL
npx prisma migrate deploy
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📦 Scripts

- `npm run dev` – Inicia o ambiente de desenvolvimento
- `npm run build` – Build de produção (inclui prisma generate)
- `npm run start` – Inicia o servidor de produção

## 🗃️ Estrutura

- `src/app/` – Páginas e componentes principais
- `src/app/_components/` – Componentes reutilizáveis (UI, Header, Cards, etc)
- `src/app/_constant/search.ts` – Opções de busca rápida com ícones SVG
- `prisma/` – Schema, seed e migrations do banco

## 👨‍💻 Autor

Feito com 💙 por [Eduardo Almeida](https://www.linkedin.com/in/eduardo-cardoso-de-almeida/)

---

Sinta-se à vontade para adaptar, traduzir ou incrementar! Se quiser, posso gerar o arquivo README.md já pronto para você.
