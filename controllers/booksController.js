import Book from "../models/books.model.js"

// Add a Book
export async function addbook(req, res) {
    try {
        let book = await Book.create(req.body);
        if (book) {
            res.status(200).json({
                success: true,
                message: 'book added successfully',
                data: book
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'book could not be added at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View a Book
export async function viewbook(req, res) {
    try {
        let allbooks = await Book.findAll({where: {book_id: req.params.id}});
        if (!allbooks) {
            res.json({
                success: true,
                message: 'No book records found.',
            
            })
        } 
        
        else {
            res.json({
                success: true,
                message: 'book records retrieved successfully',
                data: allbooks
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View all Books
export async function viewAllbooks(req, res) {
    try {
        let allbooks = await Book.findAll();
        if (allbooks) {
            res.json({
                success: true,
                message: 'book records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// Update  record Book //book_id
export async function updatebook(req, res) {
    try {
        let books = await Book.update(
           (req.body),
          {where: {book_id: req.params.id}}
        )
        if (books) {
            res.json({
                success: true,
                message: 'book records updated successfully',
                data: books
            })
        } else {
            res.json({
                success: true,
                message: 'No book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}
// Delete a Book
export async function deletebook(req, res) {
    try {
        let allbooks = await Book.destroy({where: {book_id: req.params.id}});
        if (allbooks) {
            res.json({
                success: true,
                message: 'book records deleted successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}