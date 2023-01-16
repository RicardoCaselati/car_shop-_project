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
}

export default CarService;
