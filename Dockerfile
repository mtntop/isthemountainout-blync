FROM node:latest

RUN apt-get update
RUN apt-get install -y libudev-dev libusb-1.0-0-dev

WORKDIR /usr/mtn/app
ADD ./app.js /usr/mtn/app/
ADD ./package.json /usr/mtn/app/
RUN npm install
EXPOSE 3000

CMD node app.js
