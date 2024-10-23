import express from 'express'
import {getHome} from '../controller/index.js'


const router=express.Router();

router.post('/',getHome);
//router.put('/',putHome)



export default router;