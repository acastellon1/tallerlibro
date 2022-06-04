import {Request, Response, Application} from 'express';
import { AutorController } from '../controller/autor.controller';

export class AutorRoutes{
    public autorController: AutorController = new AutorController();

    public routes(app: Application): void {
        app.route("/autores").get(this.autorController.getAllAutor)
        app.route("/autor/:id").get(this.autorController.getOneAutor)
        app.route("/autor").post(this.autorController.createAutor)
        app.route("/autor/:id").patch(this.autorController.updateAutor)
        app.route("/autor/:id").delete(this.autorController.deleteAutor)
        //app.route("/Delusuario/:id").patch(this.usuarioController.deleteUsuario)
    }
}