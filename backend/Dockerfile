FROM node:latest as BUILDER 
LABEL maintainer="Melissa Lopes"

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

COPY src ./src

FROM node:latest

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/ ./

EXPOSE 4000

CMD [ "npm", "start" ]