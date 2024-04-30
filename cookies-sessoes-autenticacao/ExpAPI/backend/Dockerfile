FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 4466

CMD ["npm", "start"]