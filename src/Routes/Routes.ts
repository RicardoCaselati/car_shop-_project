// import { Router } from 'express';

// import carRouter from './cars.router';

// const routes = Router();

// routes.use('/cars', carRouter);

// export default routes;

import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateById(),
);

routes.delete(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).deleteById(),
);

export default routes;
