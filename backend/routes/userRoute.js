import express from "express";
import User from "../models/userModel"

const router = express.Router()

router.get("/createadmin", async ( req, res)=>{
    try {

        const user = new User({
            name: 'Kabir',
            email: 'kabirabdulkareem@gmail.com',
            password: '1234',
            isAdmin: true
        })
        const newUser = await user.save();
        res.send(newUser)
        
    } catch (error) {
        res.send({msg:"Very Bad ERROR " + error.message})
    }


})

export default router;