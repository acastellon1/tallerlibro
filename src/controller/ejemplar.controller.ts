import { Request, Response } from "express";
import { Libro, LibroI } from "../models/Libro";
import { Ejemplar, EjemplarI } from "../models/Ejemplar";

export class EjemplarController{
    public async getAllEjemplar(req: Request, res:Response){
        try {
            const ejemplar: EjemplarI[] = await Ejemplar.findAll() // select * from ventas;
            res.status(200).json({ejemplar})
        } catch (error) {
            
        }
    }

    public async getOneEjemplar(req: Request, res: Response){
        const { id:idParam } = req.params
  
        try {
            const ejemplar:EjemplarI | null = await Ejemplar.findOne(
                {
                    where: {
                         id: idParam
                      }
                }
            )
  
          res.status(200).json({ejemplar})
        } catch (error) {
            res.status(500).json({msg: "Error interno"})
        }
      }

      public async createEjemplar(req: Request, res: Response){
        const {
          id,
          localizacion, 
          LibroId
      } = req.body;
  
      try {
          let body: EjemplarI = {
            localizacion, 
            LibroId
          }
  
          const ejemplar = await Ejemplar.create({...body});
          res.status(200).json({ejemplar});
      } catch (error) {
          
      }
    }

    public async updateEjemplar(req: Request, res: Response){
        const { id: pk } = req.params;
  
        const{
            id,
            localizacion, 
            LibroId
        } = req.body
  
        try {
            let body: EjemplarI = {
                
                localizacion, 
                LibroId

            }
  
            const ejemplarExist: EjemplarI | null = await Ejemplar.findByPk(pk)
          //const userExist: UsuarioI | null = await Usuario.findOne(
          //    {
          //    where: { id: pk }
          //    }
              
          //);
  
            if (!ejemplarExist) return res.status(500).json({msg: "El Ejemplar no existe"})
            await Ejemplar.update(
                body, {
                    where: {id: pk}
                }
            );
  
        } catch (error) {
            
        }
  
        const ejemplar: EjemplarI | null = await Ejemplar.findByPk(pk)
        if(ejemplar) return res.status(200).json({ejemplar})
      }

      public async deleteEjemplar(req: Request, res: Response){
        const { id: pk } = req.params;
        
        try {
            const ejemplarExist: EjemplarI | null = await Ejemplar.findByPk(pk)
            if(!ejemplarExist) return res.status(500).json({msg: "El Ejemplar no existe"})
            await Ejemplar.destroy(
                {
                    where: {id:pk}
                }
            )
            res.status(200).json({msg: "El Ejemplar ha sido eliminado"})
        } catch (error) {
            
        }
        
    }

}