
import login from "../models/loginModel.js";

function decodeQueryParam(p) {
    return decodeURIComponent(p.replace('%40', '@'));
  }

export const checkLogin = async (req, res) => {
    try {
        const logins = await login.findAll();
        res.json(logins);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getLoginById = async (req, res) => {
    //encodeURIComponent(req.params.id).replace(/%40/g, '@')
    console.log(req.params.id + ",hello," + decodeQueryParam(req.params.id))
    try {
        const logins = await login.findAll({
            where: {
                Email: decodeQueryParam(req.params.id)
               // password: req.params.password 
            }
        });
       // console.log(decodeQueryParam(req.params.id))
        res.json(logins[0]);
    } 
    
    
    catch (error) {
       // console.log("hello" + decodeQueryParam(req.params.id));
        res.json({ message: error.message });
    }} 

  