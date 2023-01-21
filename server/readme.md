
//Instala SQLite para o ORM do Prisma
npx prisma init --datasource-provider SQLite

//Após criado schema (prisma/schema.prisma), faz o migration da base de dados
//Onde são gerados pasta "migrations" e arquivo dev.db
npx prisma migrate dev
{
    > curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    > sudo apt-get install -y nodejs
}

//Roda o Studio do Prisma
npx prisma studio 


//Visualiza diagramas (https://www.npmjs.com/package/prisma-erd-generator)
npm i -D prisma-erd-generator @mermaid-js/mermaid-cli
    //Adicionar no shcema.prisma
    > generator erd {
        provider = "prisma-erd-generator"
      }

    //Gera relacionamento
    > npx prisma generate

//Criar arquivo seed.ts (https://www.prisma.io/docs/guides/database/seed-database)
//Adicionar no arquivo package.json e trocar ts-node por tsx
"prisma": {
    "seed": "tsx prisma/seed.ts"
  }

//Apos criar dados no seed.ts
npx prisma db seed
npx prisma studio

//Importar zod para validação de tipos
npm i zod

//Adiciona lib para trabalhar com datas
npm i dayjs