// import { NextFunction, Request, Response } from 'express';
// import { Types } from 'mongoose';
// import ICar from '../Interfaces/ICar';
// import CarService from '../Services/CarService';

// class MotorcyclesController {
//   private req: Request;
//   private res: Response;
//   private next: NextFunction;
//   private service: CarService;

//   constructor(req: Request, res: Response, next: NextFunction) {
//     this.req = req;
//     this.res = res;
//     this.next = next;
//     this.service = new CarService();
//   }

//   public async create() {
//     const car: ICar = {
//       model: this.req.body.model,
//       year: this.req.body.year,
//       color: this.req.body.color,
//       status: this.req.body.status,
//       buyValue: this.req.body.buyValue,
//       doorsQty: this.req.body.doorsQty,
//       seatsQty: this.req.body.seatsQty,
//     };

//     try {
//       const newCar = await this.service.create(car);
//       return this.res.status(201).json(newCar);
//     } catch (error) {
//       this.next(error);
//     }
//   }

//   public async getAll() {
//     const cars = await this.service.getAll();
//     return this.res.status(200).json(cars);
//   }

//   public async getById() {
//     try {
//       const { id } = this.req.params;
//       if (!Types.ObjectId.isValid(id)) {
//         return this.res.status(422).json({ message: 'Invalid mongo id' });
//       }
//       const returnedCar = await this.service.getById(id);

//       if (!returnedCar) {
//         return this.res.status(404).json({ message: 'Car not found' });
//       }
//       return this.res.status(200).json({ ...returnedCar, id });
//     } catch (error) {
//       this.next(error);
//     }
//   }

//   public async updateById() {
//     const car: ICar = {
//       model: this.req.body.model,
//       year: this.req.body.year,
//       color: this.req.body.color,
//       status: this.req.body.status,
//       buyValue: this.req.body.buyValue,
//       doorsQty: this.req.body.doorsQty,
//       seatsQty: this.req.body.seatsQty,
//     };

//     try {
//       const { id } = this.req.params;
//       if (!Types.ObjectId.isValid(id)) {
//         return this.res.status(422).json({ message: 'Invalid mongo id' });
//       }
//       const returnedCar = await this.service.getById(id);

//       if (!returnedCar || returnedCar === null) {
//         return this.res.status(404).json({ message: 'Car not found' });
//       }

//       const carUpdated = await this.service.updateById(id, car);
//       return this.res.status(200).json(carUpdated);
//     } catch (error) {
//       this.next(error);
//     }
//   }

//   public async deleteById() {
//     try {
//       const { id } = this.req.params;
//       if (!Types.ObjectId.isValid(id)) {
//         return this.res.status(422).json({ message: 'Invalid mongo id' });
//       }

//       const returnedCar = await this.service.getById(id);

//       if (!returnedCar || returnedCar === null) {
//         return this.res.status(404).json({ message: 'Car not found' });
//       }

//       const carUpdated = await this.service.deleteById(id);
//       return this.res.status(200).json(carUpdated);
//     } catch (error) {
//       this.next(error);
//     }
//   }
// }

// export default MotorcyclesController;
