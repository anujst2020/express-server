export interface IWrite<T> {
	create(item: T): Promise<boolean>;
	update(id: string, item: T): Promise<boolean>;
	delete(id: string): Promise<boolean>;
}

export interface IRead<T> {
	find(): Promise<T[]>;
	// findOne(id: string): Promise<T>;
}