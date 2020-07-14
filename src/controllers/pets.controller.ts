import { Request, Response } from 'express'
import { auth, close } from './../connection'
import pets from './../models/pets.model'

export default class PetsController{
    static async getAllPets(request: Request, response:Response) {
        try{
            const limit: any = request?.query?.limit || 20
            const pet = await pets.findAll({ limit: Number(limit) })
            pet === null ?
                response.status(204).send() :
                response.status(200).send(pet)
        }catch(err){
            response.status(403).send(err)
        }
    }

    static async createAPet(request: Request, response: Response){
        try{
            const {name, tag} = request.body
            const pet = await pets.create({name, tag})
            response.status(201).send()
        }catch(err){
            response.status(403).send({errMsg: err?.errors[0]?.message})
        }
    }

    static async getAPet(request: Request, response:Response) {
        try{
            const {id} = request.params
            const pet = await pets.findByPk(id)
            
            if(pet === null)
                response.status(204).send()
            else
                response.status(200).send(pet)
        }catch(err){
            response.status(403).send({errMsg: err?.errors[0]?.message})
        }
    }
}