/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { battleResultResponse } from './mock-data/battle-result-response';
import cors from 'cors';

const app = express();
app.use(cors())
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/battle-result', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type, Accept'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.send(battleResultResponse);
});
app.get('/api/commands', (req, res) => {
  res.send({ message: 'Commands!' });
});
app.get('/api/players', (req, res) => {
  res.send({ message: 'Players!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
