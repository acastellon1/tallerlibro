import express, {Application} from 'express' //Importar Application de express
import morgan from 'morgan'; //Importamos morgan
import { Routes } from '../routes/index';
var cors = require("cors");

export class App {
    app: Application;
    public RoutePrv: Routes = new Routes();
    
    constructor(
        private port?: number | string
    ){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }
    
    settings() {
        this.app.set('port', this.port || 3000)
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes() {
        this.RoutePrv.usuarioRoutes.routes(this.app);
        this.RoutePrv.autorRoutes.routes(this.app);
        this.RoutePrv.libroRoutes.routes(this.app);
        this.RoutePrv.ejemplarRoutes.routes(this.app);
        this.RoutePrv.prestarRoutes.routes(this.app);
    }

}