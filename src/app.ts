import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import { studentRouter } from './modules/student/student.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', studentRouter);

app.get('/api/v1', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
