FROM node:10.7

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn
RUN mkdir -p /var/log/website

COPY build ./build

EXPOSE 8080
CMD ["yarn", "run-prod"]
