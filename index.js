import express from 'express';
import { router as todoRouter } from './todo/todo.routes.js';

const app = express();
app.use(express.json());
app.use('/api/todos', todoRouter);




app.listen(3001, () => {
  console.log('Server listens to http://localhost:3001');
});




