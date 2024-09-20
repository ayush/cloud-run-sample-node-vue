# Sample vuejs and backend for cloud run

## Setup

install nvm
npm install
nvm use 18

## Run locally

node --watch index.js
Open http://localhost:8080/

## Development

### Libraries used

- Client
    - [CSS Framework](https://bulma.io/documentation/)
    - [HTML Javascript Framework](https://vuejs.org/guide/essentials/template-syntax.html)
- Server
    - [Express](https://expressjs.com/en/guide/routing.html)

### Key Code locations

- [Root HTML File](./public/AppMain.vue)
- [Server Routes](./index.js)

## Deploy

gcloud run deploy