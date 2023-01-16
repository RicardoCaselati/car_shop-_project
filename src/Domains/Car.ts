import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(vehicle: ICar) {
    super(vehicle);
    this.doorsQty = vehicle.doorsQty;
    this.seatsQty = vehicle.seatsQty;
  }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;
