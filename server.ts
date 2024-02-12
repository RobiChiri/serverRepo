import express, { Router } from "express";
import { items } from "./items";
import {router as ProductRouter} from "./routes/ProductRoute"
const app = express();


app.use("/api", ProductRouter)


const port= 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
