import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import { json, urlencoded} from 'body-parser'
import path from 'path'
import * as swagger from 'swagger-express-ts'
import { SwaggerDefinitionConstant } from 'swagger-express-ts'
 
import indexRoutes from './routes/index.route'
import petsRoutes from './routes/pets.route'

export default class Server{
    app: Application

    constructor(){
        this.app = express()
        this.config()
        this.routes()
    }

    public config(): void{
        this.app.set('port', process.env.PORT || 3000)
    }
    
    public routes(): void{
        this.app.use(morgan('dev'))
        this.app.use(helmet())
        // Middleware
        this.app.use(urlencoded({
            extended: true,
            limit: 1024 * 1024 * 5,
            type: 'application/x-www-form-urlencoding'
        }))

        this.app.use(json({ 
            limit: 1024 * 1024,
            type: 'application/json'
        }))
    
        this.app.use(indexRoutes)
        this.app.use(petsRoutes)
        
        // API DOCS
        this.app.use('/api-docs', express.static(path.join(__dirname, 'api-docs')))
        this.app.use('/api-docs/swagger/assets', express.static('node_modules/swagger-ui-dist'))
        this.app.use(swagger.express({
            definition: {
                info: {
                    title: 'My api',
                    version: '1.0',
                },
                models:{
                    Pet: {
                        description: '',
                        properties:{
                            id: {
                                type: SwaggerDefinitionConstant.INTEGER
                                , required: false
                            },
                            name: {
                                type: SwaggerDefinitionConstant.STRING
                                , required: true
                            },
                            tag: {
                                type: SwaggerDefinitionConstant.STRING
                                , required: true
                            }
                        }
                    }
                },
                responses: {
                    201: {}
                },
            },
        }))

        // Not allowed
        this.app.use((req: Request, res: Response) => {
            res.status(403).send({error: 'Method not allow'})
        })
    }

    public start(): void{
        this.app.listen(this.app.get('port'), () => console.log(`Server running on port ${this.app.get('port')}`) )
    }
}