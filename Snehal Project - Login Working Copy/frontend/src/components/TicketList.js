import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const TicketList = () => {
    const naviagte = useNavigate();
    const backToLogin = async (e) => {
        e.preventDefault();
        
        naviagte("/");
    }
    const [tickets, setTickets] = useState([]);
 
    useEffect(() => {
        getTickets();
    }, []);
 
    const getTickets = async () => {
        const response = await axios.get('http://localhost:5000/tickets');
        setTickets(response.data);
    }
 
    const deleteTicket = async (id) => {
        await axios.delete(`http://localhost:5000/tickets/${id}`);
        getTickets();
    }
    
 
    return (
        <div>
            <form onSubmit={ backToLogin } >
                <div className="field">            
                </div>
                <div className="field">
                    <button className="button is-primary" align = "right">Logout</button>
                </div>
            </form>
            <Link to="/add" className="button is-primary mt-2">Create Ticket</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Ticket ID</th>
                        <th>Title</th>
                        <th>Desciption</th>
                        <th>Status</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { tickets.map((ticket, index) => (
                        <tr key={ ticket.id }>
                            <td>{ ticket.customer_id }</td>
                            <td>{ ticket.id}</td>
                            <td>{ ticket.title }</td>
                            <td>{ ticket.description }</td>
                            <td>{ ticket.status }</td>
                            <td>{ ticket.email }</td>
                            <td>
                                <Link to={`/edit/${ticket.id}`} className="button is-small is-info"> Edit</Link><button onClick={ () => deleteTicket(ticket.id) } className="button is-small is-danger">Delete</button>                     
                                
                                
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}

 
export default TicketList   