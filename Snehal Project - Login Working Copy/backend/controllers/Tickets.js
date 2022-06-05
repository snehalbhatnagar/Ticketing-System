import Ticket from "../models/ticketModel.js";

export const getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll();
        res.json(tickets);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getTicketById = async (req, res) => {
    try {
        const tickets = await Ticket.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(tickets[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createTicket = async (req, res) => {
    try {
        await Ticket.create(req.body);
        res.json({
            "message": "Ticket Generated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const updateTicket = async (req, res) => {
    try {
        await Ticket.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Ticket Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const deleteTicket = async (req, res) => {
    try {
        await Ticket.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Ticket Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}