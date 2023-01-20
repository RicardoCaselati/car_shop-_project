import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    if (!motorcycle) throw new Error('Invalid Request!');
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleFounded = await motorcycleODM.find();
    const motorcycleArray = motorcycleFounded.map((motorcycle) =>
      this.createMotorcycleDomain(motorcycle));
    return motorcycleArray;
  }

  public async getById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const carFounded = await motorcycleODM.findById(id);
    return carFounded;
  }

  public async updateById(id: string, car: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const updatedCar = await motorcycleODM.update(id, car);
    return this.createMotorcycleDomain(updatedCar);
  }

  public async deleteById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const carFounded = await motorcycleODM.delete(id);
    return carFounded;
  }
}

export default MotorcycleService;
