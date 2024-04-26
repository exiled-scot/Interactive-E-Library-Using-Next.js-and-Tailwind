FROM node:latest

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 3000

RUN yarn next build

CMD ["yarn", "next", "start"]