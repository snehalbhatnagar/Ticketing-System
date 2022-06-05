import { useState } from 'react'
import axios from "axios";

import { useNavigate } from 'react-router-dom';
 
const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [customer_id, setCustomerID] = useState('');
    const [email, setEmail] = useState('');
    const [ticket_id, setTicketID] = useState('');
    const naviagte = useNavigate();
  
    const saveTicket = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/tickets',{
            title: title,
            description: description,
            status: status,
            customer_id: customer_id,
            ticket_id: ticket_id,
            email: email
        });
        naviagte("/TicketList");
    }
 
    return (
        <div>
            <form onSubmit={ saveTicket }>
                <div className="field">
                    <label className="label">Customer ID</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="CustomerID"
                        value={ customer_id }
                        onChange={ (e) => setCustomerID((e.target.value)) }
                    />
                </div>

               

                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Description</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Desc"
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Status</label>
                    <input 
                        className="input"
                        list = "value"
                        type="text"
                        placeholder="Status"
                        value={ status }
                        onChange={ (e) => setStatus(e.target.value) }
                    />
                    
                    <datalist id ="value">
                        <option value="ASSIGNED"> </option>
                        <option value="IN PROCESS"> </option>
                        <option value="RESOLVED">  </option>
                        <option value="CANCELLED">  </option>
                    </datalist>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct