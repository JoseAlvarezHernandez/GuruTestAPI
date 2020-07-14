import { Router } from 'express'

import PetsController from './../controllers/pets.controller'

class PetsRoutes{
    router: Router
    path: string = '/api/pets'

    constructor(petsController: PetsController = new PetsController()){
        this.router = Router()
        this.routes()
    }

    routes(){
        this.router.get(this.path, PetsController.getAllPets)
        this.router.post(this.path, PetsController.createAPet)
        this.router.get(`${this.path}/:id`, PetsController.getAPet)
    }
}

const petsRoutes = new PetsRoutes()


export default petsRoutes.router