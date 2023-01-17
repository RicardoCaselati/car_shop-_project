import IVehicle from './IVehicle';

interface IMotorcycles extends IVehicle{
  category: number;
  engineCapacity: number;
}

export default IMotorcycles;