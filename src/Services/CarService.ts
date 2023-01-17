import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    if (!car) throw new Error('Invalid Request!');
    const carODM = new CarsODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const carsODM = new CarsODM();
    const carFounded = await carsODM.find();
    const carsArray = carFounded.map((car) =>
      this.createCarDomain(car));
    return carsArray;
  }

  public async getById(id: string) {
    const carsODM = new CarsODM();
    const carFounded = await carsODM.findById(id);
    return carFounded;
  }
}

export default CarService;
