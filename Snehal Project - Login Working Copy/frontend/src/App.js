import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketList from "./components/TicketList";
import AddTicket from "./components/AddTicket";
import EditTicket from "./components/EditTicket";
import LoginPage from "./components/LoginPage";
import 'bulma/css/bulma.min.css';

function App() {
  
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
          <Route exact path="/" element={<LoginPage />}>              
              </Route>

            <Route exact path="/TicketList" element={<TicketList />}>              
            </Route>

            <Route path="/add" element={<AddTicket />}>             
            </Route>

            <Route path="/edit/:id" element={<EditTicket />}>
              
            </Route>
            
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;