import express from "express";


import { checkLogin, getLoginById } from "../controllers/Login.js";

const router = express.Router();

//router.get("/:id,:password", getLoginById);
router.get("/:id", getLoginById);
//router.get("/",checkLogin); //this returns all data in login_details table.
export default router;