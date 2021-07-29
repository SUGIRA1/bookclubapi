import express from "express";
import { addBorrows, viewborrows, viewAllborrows, updateborrows, viewmemberborrow} from "../controllers/borrowController.js";

const borrowRouter = express.Router();

// Add a record
borrowRouter.post("/", addBorrows);

// View a record
borrowRouter.get("/:id",viewborrows);

// View all records
borrowRouter.get("/", viewAllborrows);

// Update a record
borrowRouter.put("/:id", updateborrows);

// view member borrowings
borrowRouter.get("/:id", viewmemberborrow);


export default borrowRouter;




