// import all interfaces
import { IWrite, IRead } from './IVersionable';
import { MongoClient, Db, Collection, ObjectId } from 'mongodb';

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
        const result = await this._collection.updateOne({_id: new ObjectId(id)}, item);
        return true;
    }
    async delete(id: string): Promise<boolean> {
        const result = await this._collection.deleteOne({_id: new ObjectId(id)});
        return true;
    }
    async find(): Promise<any> {
        const result = await this._collection.find().toArray();
        return result;
    }
    async findOne(id: string): Promise<any> {
        const result = await this._collection.find({_id: new ObjectId(id)}).toArray();
        return result.length? result[0] : null;
    }
}