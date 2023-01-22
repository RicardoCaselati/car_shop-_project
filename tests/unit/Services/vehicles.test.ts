import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import MotorcycleService from '../../../src/Services/MotorcyclesService';
import {
  carArrayMock,
  carMock,
  updatedCarMock,
  motorcycleMock,
  updatedMotorcycleMock,
  motorcycleArrayMock,
} from '../mocks/mocks';
import Icar from '../../../src/Interfaces/ICar';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Car from '../../../src/Domains/Car';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Testa a busca de veiculos', function () {
  it('Deveria buscar todas os carros com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves(carArrayMock);

    const carsArrayOutput = carArrayMock.map((item) => (
      item
    ));

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(carsArrayOutput);

    sinon.restore();
  });

  it('Deveria buscar todas as motos com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves(motorcycleArrayMock);

    const motorcyclesArrayOutput = motorcycleArrayMock.map((item) => (
      item
    ));

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(motorcyclesArrayOutput);

    sinon.restore();
  });

  it('Deveria buscar todas carros pelo seu ID com SUCESSO', async function () {
    // sinon.stub(Model, 'findById').returns({ select: () => ({ lean: () => mockCar }) } as any);
    sinon.stub(Model, 'findOne').resolves(carMock);
    const service = new CarService();
    const result = await service.getById('63c52df6e4f1c5b7839ed90b');

    expect(result).to.be.deep.equal(carMock);

    sinon.restore();
  });

  it('Deveria buscar todas motos pelo seu ID com SUCESSO', async function () {
    sinon.stub(Model, 'findOne').resolves(motorcycleMock);
    const service = new MotorcycleService();
    const result = await service.getById('63c52df6e4f1c5b7839ed90b');

    expect(result).to.be.deep.equal(motorcycleMock);

    sinon.restore();
  });

  it('Deveria inserir novos carros com SUCESSO', async function () {
    const newCar: Icar = carMock;
    const searchedCar: Car = new Car(carMock);

    sinon.stub(Model, 'create').resolves(searchedCar);
    const service = new CarService();
    const result = await service.create(newCar);

    expect(result).to.be.deep.equal(searchedCar);

    sinon.restore();
  });

  it('Deveria inserir novas motos com SUCESSO', async function () {
    const newMotorcycle: IMotorcycle = motorcycleMock;
    const searchedMotorcycle: Motorcycle = new Motorcycle(motorcycleMock);

    sinon.stub(Model, 'create').resolves(searchedMotorcycle);
    const service = new MotorcycleService();
    const result = await service.create(newMotorcycle);

    expect(result).to.be.deep.equal(searchedMotorcycle);

    sinon.restore();
  });

  it('Deveria atualizar novos carros com SUCESSO', async function () {
    const carToUpdate: Icar = carMock;
    const updatedCar: Car = new Car(updatedCarMock);

    sinon.stub(Model, 'findOneAndUpdate').resolves(updatedCar);
    const service = new CarService();
    const result = await service.updateById('63c52df6e4f1c5b7839ed90b', carToUpdate);

    expect(result).to.be.deep.equal(updatedCar);

    sinon.restore();
  });

  it('Deveria atualizar novas motos com SUCESSO', async function () {
    const bikeToUpdate: IMotorcycle = motorcycleMock;
    const updatedBike: Motorcycle = new Motorcycle(updatedMotorcycleMock);
    
    sinon.stub(Model, 'findOneAndUpdate').resolves(updatedBike);
    const service = new MotorcycleService();
    const result = await service.updateById('63c53edae4f1c5b7839ed914', bikeToUpdate);

    expect(result).to.be.deep.equal(updatedBike);

    sinon.restore();
  });
});