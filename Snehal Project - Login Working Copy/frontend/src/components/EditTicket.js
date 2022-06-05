/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,useParams  } from 'react-router-dom';
 
const EditTicket = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const naviagte = useNavigate();
 
    const { id } = useParams();
 
    const updateTicket = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/tickets/${id}`,{
            title: title,
            description: description,
            status: status
        });
        naviagte("/TicketList");
    }
 
    useEffect(() => {
        getTicketByID();
    }, []);
 
    const getTicketByID = async () => {
        const response = await axios.get(`http://localhost:5000/tickets/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setStatus(response.data.status);
    }
 
    return (
        <div>
            <form onSubmit={ updateTicket }>
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
                        type="text"
                        placeholder="Status"
                        value={ status }
                        onChange={ (e) => setStatus(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditTicket