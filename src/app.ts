import express, { Request, Response } from 'express'
import pushData, { Person } from './Methods/Methods.js'

const app = express();
const port = process.env.PORT || 3000;
const db: Person[] = []

app.use(express.json());
app.use(express.text());

app.post('/', (req: Request, res: Response) => {
	pushData(db, req);
	res.send();
})

app.get("/", (req: Request, res: Response) => {
	res.send(db);
})


app.listen(port, () => {
	console.log(`listening on ${port}...`)
})