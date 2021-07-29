import express from "express";
import {addbook, viewbook, viewAllbooks, updatebook, deletebook} from "../controllers/booksController.js";

const booksRouter = express.Router();

// Add a book
booksRouter.post("/", addbook);

// View a book // books/:id
booksRouter.get("/:id",viewbook);

// View all books // books/
booksRouter.get("/", viewAllbooks);

// Update book record // books/
booksRouter.put("/:id", updatebook);

// Delete a book  // books/:id
booksRouter.delete("/:id", deletebook);


export default booksRouter;




