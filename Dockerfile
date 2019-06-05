FROM node

WORKDIR /usr/src/app

ARG url=none
ENV VUE_APP_URL=$url

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]
