import express from "express";
import { deleteProduct, getProduct, getProductById } from "../controllers/ProductControllers";

export const router = express.Router();

router.get("/items", getProduct);

router.get("/items/:id", getProductById);

router.delete("/items/:id", deleteProduct);
