FROM node:10.7-alpine

WORKDIR /usr/src/app

ENV NPM_CONFIG_LOGLEVEL info

CMD mkdir -p /usr/src/app/build
COPY . .
cmd rm -rf node_modules

RUN npm install -g serve

CMD serve -s build

EXPOSE 5000
