import { Router } from 'express';

import carRouter from './cars.router';
// import MotorcyclesController from '../Controllers/MotorcyclesController';
import motorcyclesRouter from './motorcycle.router';

const routes = Router();

routes.use('/cars', carRouter);
routes.use('/motorcycles', motorcyclesRouter);

// routes.post(
//   '/motorcycles',
//   (req, res, next) => new MotorcyclesController(req, res, next).create(),
// );

export default routes;

// import { Router } from 'express';
// import CarController from '../Controllers/CarController';
// import MotorcyclesController from '../Controllers/MotorcyclesController';

// const routes = Router();

// routes.post(
//   '/cars',
//   (req, res, next) => new CarController(req, res, next).create(),
// );

// routes.get(
//   '/cars',
//   (req, res, next) => new CarController(req, res, next).getAll(),
// );

// routes.get(
//   '/cars/:id',
//   (req, res, next) => new CarController(req, res, next).getById(),
// );

// routes.put(
//   '/cars/:id',
//   (req, res, next) => new CarController(req, res, next).updateById(),
// );

// routes.delete(
//   '/cars/:id',
//   (req, res, next) => new CarController(req, res, next).deleteById(),
// );

// export default routes;
