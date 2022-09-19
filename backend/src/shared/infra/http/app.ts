import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { AppError } from '@/shared/errors/AppError';
import { routes } from './routes';

// providers
import '@/shared/container';

// app
const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

// routes
app.use(routes);

// error handling
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server Error - ${err.message}`,
  });
});

export { app };
