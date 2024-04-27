FROM node:latest

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install
RUN npm install --force

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]