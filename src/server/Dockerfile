FROM node:16.3.0-alpine
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 4000
ENTRYPOINT ["npm","run", "test"]