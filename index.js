import express from 'express';
import path from "path";
import {fileURLToPath} from 'url';

const app = express();
app.use('/', express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')))

app.get('/api/hello', (req, res) => {
  const name = process.env.NAME || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({message: `Greetings all the way from the server: ${name}!`}));
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`server: listening on port ${port}`);
});
