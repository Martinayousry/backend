import mongoose from "mongoose";

const connectToDatabase = () => {
  const port = process.env.PORT;
  const dbConnectionString = process.env.DB!;

  mongoose
    .connect(dbConnectionString)
    .then(() => {
      console.log(`Connected to MongoDB. Server is running at http://localhost:${port}/`);
    })
    // .catch((err) => {
    //   console.error('Failed to connect to MongoDB:', err);
    // });  mb2ash leha lazma b3d ma hndlto f app.ts
};

export default connectToDatabase;
