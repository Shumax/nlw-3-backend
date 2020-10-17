import express from 'express';
import 'express-async-errors';
import path from 	'path';

import routes from './routes';
import errorHandler from 	'./errors/handler';

import './dao/config'

const app = express();

app.use(express.json()); 

app.use(routes);
app.use(errorHandler);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);