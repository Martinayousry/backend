import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT
const dbConnectionString = process.env.DB!;

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

mongoose
  .connect(dbConnectionString)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
