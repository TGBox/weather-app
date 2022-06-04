FROM node:18.2.0-alpine3.14

WORKDIR /weather-app

COPY . .

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]