FROM node:14-alpine

WORKDIR /usr/src/app

# COPY THIS ROOT INTO APP
COPY . .

#APP DEPENCENCIES
RUN npm install -g nodemon 
RUN npm install

CMD ["npm", "start"]