// import all interfaces
import { IWrite, IRead } from './IVersionable';
import { MongoClient, Db, Collection } from 'mongodb';

// that class only can be extended
export abstract class VersionableRepository<T> implements IWrite<T>, IRead<T> {
    public readonly _collection: Collection;

  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }

    async create(item: T): Promise<boolean> {
        const result = await this._collection.insertOne(item);
        return true;
    }
    async update(id: string, item: T): Promise<boolean> {
        const result = await this._collection.updateOne({_id: id}, item);
        return true;
    }
    async delete(id: string): Promise<boolean> {
        const result = await this._collection.deleteOne({_id: id});
        return true;
    }
    async find(): Promise<T[]> {
        const result = await this._collection.find();
        console.log(result);
        return [];
    }
    // async findOne(id: string): Promise<T> {
    //     const result = await this._collection.findOne({_id: id});
    //     return {};
    // }
}