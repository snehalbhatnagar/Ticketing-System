import express from "express";

import { 
    getAllTickets,
    createTicket,
    getTicketById,
    updateTicket,
    deleteTicket
} from "../controllers/Tickets.js";

//import { checkLogin } from "../controllers/Login.js";

const router = express.Router();
//router.get("/",checkLogin);
router.get('/', getAllTickets);
router.get('/:id', getTicketById);
router.post('/', createTicket);
router.patch('/:id', updateTicket);
router.delete('/:id', deleteTicket);

export default router;