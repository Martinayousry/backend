import express,{Request,Response} from 'express';
import dotenv from 'dotenv';'./config/database';
import connectToDatabase from './config/database';
import mountRoute from './routes/index';
dotenv.config();

const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToDatabase();
mountRoute(app);


app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}/`);
});


