import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';
import motorcycleSchema from '../Schemas/motorcycleSchema';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    super(motorcycleSchema, 'Motorcycles');
  }
}

export default MotorcycleODM;
