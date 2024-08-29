import express,{Request,Response} from 'express';
import dotenv from 'dotenv';'./config/database';
import connectToDatabase from './config/database';
import mountRoute from './routes/index';
import { Server } from 'http';
dotenv.config();

const app: express.Application = express();
let server: Server;
app.use(express.json());
app.use(express.static('uploads'))
app.use(express.urlencoded({ extended: true }));
connectToDatabase();
mountRoute(app);


server =app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}/`);
});//added server 3lshan yt2kd an mfish requests tani gaya 3la el server
process.on('unhandledRejection', (err: Error) => {
  console.error(`unhandledRejection ${err.name} | ${err.message}`);
  server.close(() => {
    console.error('shutting the application down');
    process.exit(1);
  });
});


