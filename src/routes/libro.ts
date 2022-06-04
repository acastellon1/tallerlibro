import { Request, Response, Application } from "express";
import { LibroController } from "../controller/libro.controller";

export class LibroRoutes{
    public libroController: LibroController = new LibroController();

    public routes(app: Application): void{
        app.route("/libros").get(this.libroController.getAllLibro)
        app.route("/libro/:id").get(this.libroController.getOneLibro)
        app.route("/libro").post(this.libroController.createLibro)
        app.route("/libro/:id").patch(this.libroController.updateLibro)
        app.route("/libro/:id").delete(this.libroController.deleteLibro)
    }
}