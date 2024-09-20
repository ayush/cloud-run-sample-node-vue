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
  - [CSS Styling](https://bulma.io/documentation/)
  - [CSS Animations](https://animate.style/)
  - [HTML Javascript Framework](https://vuejs.org/guide/essentials/template-syntax.html)
    - [Example Component](https://vuejs.org/guide/introduction.html#options-api)
    - [Events](https://vuejs.org/guide/components/events.html)
- Server
  - [Express](https://expressjs.com/en/guide/routing.html)

### Key Code locations

- [Root HTML File](./public/AppMain.vue)
- [Server Routes](./index.js)

## Deploy

gcloud run deploy