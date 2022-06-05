import React, { useState } from "react";
import './login.css';
import './LoginApp.css';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


function LoginPage() {
  const navigate = useNavigate();  
  const [email, getEmailID] = useState("");
  const [password, getPassword] = useState ("");
  const [loginStatus, setLoginStatus] = useState("");
  //const querystring = require('querystring'); 
    
  const login = () => {

    Axios.get("http://localhost:5000/login/" + email)
    //Axios.get("http://localhost:5000/login",   { params: {Email: email}})
    .then((Response)=> {
      //console.log(Response.data);
     /*
      if (Response.data="error") {
        console.log(console.error.error);
        console.log("Invalid Login Id");
        //navigate("/loginPage");
      }
      else
      */
        if (Response.data !== "") {
        console.log(Response.data);
          if (Response.data.password !== password)
            {
            console.log("Incorrect password");
            setLoginStatus("Incorrect Password");
           // navigate("/loginPage");
           }
          else
            {
            setLoginStatus("Logged in");
           // console.log(Response);
            navigate("/TicketList"); 
            }
    }
    
    else{
      console.log("Invalid Login ");
        setLoginStatus("Incorrect Email ID");
       // console.log(Response);
       // navigate("/loginPage");   
    }
  })
  
  .catch(function (error){
        console.log("Invalid Login ");
        setLoginStatus("Incorrect email or password");
        //console.log(loginStatus);
        //console.log(Response);
        navigate("");  
        
  }
    
    )
}; 
    //navigate("/TicketList"); 
 
   // console.log({ email, password,loginStatus })
    
   // );
    
    

   

  return (
    
    <div className="App" align="center"><br></br><br></br>
     <div className="form">
        <div className="login" >
          <div className="login-header">
            <h1><b>Employee Login</b></h1>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form" > 
          <input type="text" placeholder="someone@example.com" onChange={(e) => {
              getEmailID(e.target.value);}}/>
          <input type="password" autoComplete="on" placeholder="Password" onChange={(e) =>{
              getPassword(e.target.value);
           }}/>
          
          <button type="submit" formAction="#0" onClick={login} > login</button>
          <h1>{loginStatus}</h1>
         
        </form>
      </div>
    </div>
  );
}


export default LoginPage;

