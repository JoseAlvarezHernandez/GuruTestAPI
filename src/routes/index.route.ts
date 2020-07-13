import { Request, Response, Router} from 'express'

class IndexRoutes{
    router: Router

    constructor(){
        this.router = Router()
        this.routes()
    }

    routes(){
        this.router.get('/', (req: Request, res: Response) => res.status(200).send({status: 'Up'}))
    }
}

const indexRoutes = new IndexRoutes()


export default indexRoutes.router