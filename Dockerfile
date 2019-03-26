FROM node:8

ARG web_port=3000

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 3005

RUN npm install

CMD node app.js 3000