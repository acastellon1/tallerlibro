import { Request, Response } from "express";
import { Prestar, PrestarI } from "../models/Prestar";


export class PrestarController{
    public async getAllPrestar(req: Request, res:Response){
        try {
            const prestar: PrestarI[] = await Prestar.findAll() // select * from ventas;
            res.status(200).json({prestar})
        } catch (error) {
            
        }
    }

    public async getOnePrestar(req: Request, res: Response){
        const { id:UsuarioId } = req.params
  
        try {
            const prestar:PrestarI | null = await Prestar.findOne(
                {
                    where: {
                         id: UsuarioId
                      }
                }
            )
  
          res.status(200).json({prestar})
        } catch (error) {
            res.status(500).json({msg: "Error interno"})
        }
      }

      public async createPrestar(req: Request, res: Response){
        const {
            id,
            fechaDev,
            fechaPres,
            UsuarioId,
            EjemplarId
      } = req.body;
  
      try {
          let body: PrestarI = {
            fechaDev,
            fechaPres,
            UsuarioId,
            EjemplarId
          }
  
          const prestar = await Prestar.create({...body});
          res.status(200).json({prestar});
      } catch (error) {
          
      }
    }

}
