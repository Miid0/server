import express, { Request } from 'express'

export class Person {
	constructor(id: number, name: string) {
	}
}

const pushData = function (db: any[], req: Request) {
	let data: Person = {
		id: Date.now(),
		name: req.body.name
	}
	db.push(data);
}

export default pushData;
