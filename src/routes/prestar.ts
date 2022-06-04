import { Request, Response, Application } from "express";
import { PrestarController } from "../controller/prestar.controller";

export class PrestarRoutes{
    public prestarController: PrestarController = new PrestarController();

    public routes(app: Application): void{
        app.route("/prestamos").get(this.prestarController.getAllPrestar)
        //app.route("/libro/:id").get(this.libroController.getOneLibro)
        //app.route("/libro").post(this.libroController.createLibro)
        //app.route("/libro/:id").patch(this.libroController.updateLibro)
        //app.route("/libro/:id").delete(this.libroController.deleteLibro)
    }
}