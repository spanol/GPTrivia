# Utiliza a imagem oficial do Node.js como base
FROM node:18-alpine
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expondo a porta 3000
EXPOSE 3000

# Comando para iniciar o servidor Next.js em modo de desenvolvimento
CMD ["npm", "run", "dev"]
