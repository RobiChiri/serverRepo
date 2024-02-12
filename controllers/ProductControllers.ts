import { items } from "../items";
import {Request, Response} from "express";

const getProduct = (req: Request, res: Response) => {
  res.status(200).json(items);
};

const getProductById = (req: Request, res: Response) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ msg: "Item not found" });
  }
  res.json(item);
};

const deleteProduct = (req: Request, res: Response) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ msg: "Item not found" });
  }
  const index = items.indexOf(item);
  items.splice(index, 1);
  res.json({ msg: "Item deleted" });
};

export {getProduct, getProductById, deleteProduct}
