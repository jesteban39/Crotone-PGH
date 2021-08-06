import express, { Application, Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes/index';
import { error } from "./@app";
/* import config from './lib/config'; */

const app: Application = express();
app.use(express.urlencoded({ extended: true, limit: '50mb' })); //middleware
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
<<<<<<< HEAD
  /*cors({
=======
/*   cors({
>>>>>>> 819a503d842c0e794dcd956b23e6c9f39f51c661
    origin: config.cors,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
<<<<<<< HEAD
  })*/
  cors()
 
=======
  }) */
  cors()
>>>>>>> 819a503d842c0e794dcd956b23e6c9f39f51c661
);

app.use((err: error, _req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

app.use(routes);

export default app;