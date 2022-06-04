import { Request, Response, Application } from "express";
import { EjemplarController } from "../controller/ejemplar.controller";

export class EjemplarRoutes{
    public ejemplarController: EjemplarController = new EjemplarController();

    public routes(app: Application): void{
        app.route("/ejemplares").get(this.ejemplarController.getAllEjemplar)
        app.route("/ejemplar/:id").get(this.ejemplarController.getOneEjemplar)
        app.route("/ejemplar").post(this.ejemplarController.createEjemplar)
        app.route("/ejemplar/:id").patch(this.ejemplarController.updateEjemplar)
        app.route("/ejemplar/:id").delete(this.ejemplarController.deleteEjemplar)
    }
}