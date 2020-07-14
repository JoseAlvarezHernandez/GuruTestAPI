import { Request, Response } from 'express'
import pets from './../models/pets.model'

export default class PetsController{
    static async getAllPets(request: Request, response:Response) {
        
        response.status(200).send({status:'up'})
    }

    static async createAPet(request: Request, response: Response){
        console.log(request)
        // pets.create()
        response.status(201).send({created: true})
    }
}