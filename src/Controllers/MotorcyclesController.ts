import { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/MotorcyclesService';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;
  private mongoMessage: string;
  private motorcycleNotFoundMessage: string;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
    this.mongoMessage = 'Invalid mongo id';
    this.motorcycleNotFoundMessage = 'Motorcycle not found';
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    
    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    const motorcycle = await this.service.getAll();
    return this.res.status(200).json(motorcycle);
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      if (!Types.ObjectId.isValid(id)) {
        return this.res.status(422).json({ message: this.mongoMessage });
      }
      const returnedMotorcycle = await this.service.getById(id);

      if (!returnedMotorcycle) {
        return this.res.status(404).json({ message: this.motorcycleNotFoundMessage });
      }
      return this.res.status(200).json({ ...returnedMotorcycle, id });
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const car: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const { id } = this.req.params;
      if (!Types.ObjectId.isValid(id)) {
        return this.res.status(422).json({ message: this.mongoMessage });
      }
      const returnedMotorcycle = await this.service.getById(id);

      if (!returnedMotorcycle || returnedMotorcycle === null) {
        return this.res.status(404).json({ message: this.motorcycleNotFoundMessage });
      }

      const motorcycleUpdated = await this.service.updateById(id, car);
      return this.res.status(200).json(motorcycleUpdated);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteById() {
    try {
      const { id } = this.req.params;
      if (!Types.ObjectId.isValid(id)) {
        return this.res.status(422).json({ message: this.mongoMessage });
      }

      const returnedMotorcycle = await this.service.getById(id);

      if (!returnedMotorcycle || returnedMotorcycle === null) {
        return this.res.status(404).json({ message: this.motorcycleNotFoundMessage });
      }

      const motorcycleUpdated = await this.service.deleteById(id);
      return this.res.status(200).json(motorcycleUpdated);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcyclesController;
