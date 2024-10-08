import dotenv from "dotenv";
import connectDB from "./db/index.js"; 
import { app } from './app.js'; 

dotenv.config({
  path: './env'
});


connectDB()
  .then(() => {
    console.log("MongoDB connected successfully!");

   
    const PORT = process.env.PORT || 8001;
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
