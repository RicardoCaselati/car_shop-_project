import {
  Model,
  models,
  Schema,
  model,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T> {
    return this.model.findOne({ _id: id }).select({ __v: 0 }).lean();
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('Invalid Mongo id');

    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error('Invalid Mongo id');

    return this.model.findByIdAndDelete({ _id: id });
  }
}

export default AbstractODM;
