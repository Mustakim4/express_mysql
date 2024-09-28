FROM node:20

WORKDIR /my_app
COPY . /my_app

RUN npm install

CMD ["npm", "start"]
