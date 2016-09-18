FROM node:6.4.0

RUN apt-get update -y
RUN apt-get install git

ADD . /src

WORKDIR /src

RUN npm install
RUN mkdir -p ./dist
EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]