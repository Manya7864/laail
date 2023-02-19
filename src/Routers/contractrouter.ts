import express,{Request,Response} from "express"
import { contractCreate, getContract } from "../../controllers/contract"
const contractRouter= express.Router()
contractRouter.post("/",contractCreate)
contractRouter.get("/",getContract)



export {
    contractRouter
}