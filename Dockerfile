FROM node:16.14.0-alpine3.14

LABEL org.opencontainers.image.authors="ashwinath@hotmail.com"
LABEL org.opencontainers.image.source https://github.com/ashwinath/personal-website-3.0

WORKDIR /app
EXPOSE 5000

ENV NPM_CONFIG_LOGLEVEL info

COPY . .
RUN yarn install
RUN yarn run build
RUN npm install -g serve
CMD serve -s build
