import { Request, Response } from 'express'


export default class PetsController{
    static async getAllPets(request: Request, response:Response) {
        
        response.status(200).send({status:'up'})
    }
}