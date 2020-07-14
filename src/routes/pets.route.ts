import { Router } from 'express'

import PetsController from './../controllers/pets.controller'
import { ApiOperationGet, ApiPath, ApiOperationPost, SwaggerDefinitionConstant } from 'swagger-express-ts'

@ApiPath({
    path: '/api/pets',
    name: 'pets'
})
class PetsRoutes{
    router: Router
    path: string = '/api/pets'

    constructor(petsController: PetsController = new PetsController()){
        this.router = Router()
        this.routes()
    }

    @ApiOperationGet({
        description: 'List all pets',
        parameters: {
            query: {
                limit :{
                    default: 20,
                    description: 'How many items to return at one time (max 100)',
                    required: false
                }
            }
        },
        responses: {
            200: { model: 'Pet', type: SwaggerDefinitionConstant.ARRAY}
        }
    })
    getAll(){
        this.router.get(this.path, PetsController.getAllPets)
    }

    @ApiOperationPost({
        description: 'Create a pet',
        parameters: {
            body: {
               model: 'Pet'
            }
        },
        responses: {
            201: { description : 'Null response'},
            'Default': { description: 'unexpected error'}
        }
    })

    createPet(){
        this.router.post(this.path, PetsController.createAPet)
    }

    @ApiOperationGet({
        description: 'Create a pet',
        path: '/{petId}',
        parameters: {
            path: {
               petId: {
                   required: true, 
                   description: 'The id of the pet to retrieve',
                   type: SwaggerDefinitionConstant.STRING
               }
            }
        },
        responses: {
            201: { model: 'Pet' },
            'Default': { description: 'unexpected error'}
        }
    })
    getAPet(){
        this.router.get(`${this.path}/:petId`, PetsController.getAPet)
    }

    routes(){
        this.getAll()
        this.createPet()
        this.getAPet()
    }
}

const petsRoutes = new PetsRoutes()


export default petsRoutes.router