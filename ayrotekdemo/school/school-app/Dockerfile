FROM node:lts

WORKDIR /app

COPY src/ /app/src/
COPY public/ /app/public/
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]