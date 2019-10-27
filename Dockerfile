FROM node:10.7-alpine
MAINTAINER Ashwin Chatterji<ashwinath@hotmail.com>
WORKDIR /app
EXPOSE 5000

ENV NPM_CONFIG_LOGLEVEL info

COPY . .
RUN yarn install
RUN yarn run build
RUN npm install -g serve
CMD serve -s build
