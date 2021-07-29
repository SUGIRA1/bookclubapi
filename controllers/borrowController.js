import Borrow from "../models/borrow.model.js"

// Add a borrow
export async function addBorrows(req, res) {
    try {
        let borrow = await Borrow.create(req.body);
        if (borrow) {
            res.status(200).json({
                success: true,
                message: 'borrow added successfully',
                data: borrow
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'borrow could not be added at this time'
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

// View a borrow
export async function viewborrows(req, res) {
    try {
        let allborrow = await Borrow.findAll({where: {borrow_id: req.params.id}});
        if (allborrow) {
            res.json({
                success: true,
                message: 'borrow records retrieved successfully',
                data: allborrow
            })
        } else {
            res.json({
                success: true,
                message: 'No borrow records found.',
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

// View all borrow
export async function viewAllborrows(req, res) {
    try {
        let allborrow = await Borrow.findAll();
        if (allborrow) {
            res.json({
                success: true,
                message: 'borrow records retrieved successfully',
                data: allborrow
            })
        } else {
            res.json({
                success: true,
                message: 'No borrow records found.',
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

// Update  record borrow
export async function updateborrows(req, res) {
    try {
        let allborrow = await Borrow.update(
           (req.body),
          {where: {borrow_id: req.params.id}}
        )
        if (allborrow) {
            res.json({
                success: true,
                message: 'borrow records updated successfully',
                data: allborrow
            })
        } else {
            res.json({
                success: true,
                message: 'No borrow records found.',
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
// view member borrow
export async function viewmemberborrow(req, res) {
    try {
        let member = await Borrow.findOne({where: {member_id: req.params.id}});
        if (member) {
            res.json({
                success: true,
                message: 'borrow records returned successfully',
                data: member
            })
        } else {
            res.json({
                success: true,
                message: 'No borrow records found.',
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