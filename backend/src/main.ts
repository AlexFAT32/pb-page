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


app.get('/api/battle/:id/result', (req, res) => {
  res.send(battleResultResponse);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
