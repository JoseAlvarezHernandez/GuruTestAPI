import { Request, Response } from 'express'
import pets from './../models/pets.model'

export default class PetsController{
    static async getAllPets(request: Request, response:Response): Promise<void> {
        try{
            const pet = await pets.findAll({ limit: Number(request?.query?.limit || 20) })
            pet === null ?
                response.status(204).send() :
                response.status(200).send(pet)
        }catch(err){
            response.status(403).send(err)
        }
    }

    static async createAPet(request: Request, response: Response): Promise<void>{
        try{
            const {name, tag} = request.body
            await pets.create({name, tag})
            response.status(201).send()
        }catch(err){
            response.status(403).send({errMsg: err?.errors[0]?.message})
        }
    }

    static async getAPet(request: Request, response:Response): Promise<void> {
        try{
            const {petId} = request.params
            console.log(request.params)
            const pet = await pets.findByPk(petId)
            
            if(pet === null)
                response.status(204).send()
            else
                response.status(200).send(pet)
        }catch(err){
            response.status(403).send({errMsg: err?.errors[0]?.message})
        }
    }
}