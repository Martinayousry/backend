import express,{Request,Response} from 'express';
import dotenv from 'dotenv';'./config/database';
import compression from 'compression';
import mongoSanitize from 'express-mongo-sanitize'
import helmet, { crossOriginResourcePolicy } from 'helmet'
import hpp from 'hpp';
import cors from 'cors'
import { I18n } from 'i18n';
import connectToDatabase from './config/database';
import mountRoute from './routes/index';
import { Server } from 'http';
import path from 'path';

const app: express.Application = express();
let server: Server;
dotenv.config();
app.use(express.json({limit:'10kb'}));
app.use(compression())
app.use(cors({
  origin: ['http://localhost:4200'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(mongoSanitize())
app.use(hpp({ whitelist: ['price', 'category', 'subcategory', 'ratingAverage', 'sold'] }));
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }))


app.use(express.static('uploads'))
connectToDatabase();
const i18n = new I18n({
  locales: ['en', 'ar'],
  directory: path.join(__dirname, 'locales'),
  defaultLocale: 'en',
  queryParameter: 'lang'
})
app.use(i18n.init)
mountRoute(app);
server = app.listen(process.env.PORT, () => {
  console.log(`App is listen on port ${process.env.PORT}`);
})

process.on('unhandledRejection', (err: Error) => {
  console.error(`unhandledRejection ${err.name} | ${err.message}`);
  server.close(() => {
    console.error('shutting the application down');
    process.exit(1);
  });
});


