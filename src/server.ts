import express, { Router, Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'

import indexRoutes from './routes/index.route'
import petsRoutes from './routes/pets.route'

export default class Server{
    app: Application

    constructor(){
        this.app = express()
        this.config()
        this.routes()
    }

    public config(){
        this.app.set('port', process.env.PORT || 3000)
    }
    
    public routes(){
        this.app.use(indexRoutes)
        this.app.use(petsRoutes)
        this.app.use(morgan('dev'))
        this.app.use(helmet())
        // Middleware
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.status(403).send({error: 'Method not allow'})
        })
    }

    public start(){
        this.app.listen(this.app.get('port'), () => console.log(`Server running on port ${this.app.get('port')}`) )
    }
}