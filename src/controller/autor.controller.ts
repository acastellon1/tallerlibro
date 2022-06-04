import { Request, Response } from "express";
import { Autor, AutorI } from "../models/Autor";

export class AutorController{
    public async getAllAutor(req: Request, res: Response){
        try {
            const autor: AutorI[] = await Autor.findAll() //select * from usuarios;
            res.status(200).json({autor}) 
        } catch (error) {
            
        }
    }

    public async getOneAutor(req: Request, res: Response){
        const { id:idParam } = req.params
  
        try {
            const autor:AutorI | null = await Autor.findOne(
                {
                    where: {
                         id: idParam,
                         activo: true
                      }
                }
            )
  
          res.status(200).json({autor})
        } catch (error) {
            res.status(500).json({msg: "Error interno"})
        }
      }

      public async createAutor(req: Request, res: Response){
        const {
            id,
            nombre, 
        } = req.body;
  
        try {
            let body: AutorI = {
              nombre
            }
  
            const autor = await Autor.create({...body});
            res.status(200).json({autor});
        } catch (error) {
            
        }
      }

      public async updateAutor(req: Request, res: Response){
        const { id: pk } = req.params;
  
        const{
            id,
            nombre
        } = req.body
  
        try {
            let body: AutorI = {
              nombre
            }
  
            const autorExist: AutorI | null = await Autor.findByPk(pk)
          //const userExist: UsuarioI | null = await Usuario.findOne(
          //    {
          //    where: { id: pk }
          //    }
              
          //);
  
            if (!autorExist) return res.status(500).json({msg: "El autor no existe"})
            await Autor.update(
                body, {
                    where: {id: pk}
                }
            );
  
        } catch (error) {
            
        }
  
        const autor: AutorI | null = await Autor.findByPk(pk)
        if(autor) return res.status(200).json({autor})
      }

      public async deleteAutor(req: Request, res: Response){
        const { id: pk } = req.params;
        
        try {
            const autorExist: AutorI | null = await Autor.findByPk(pk)
            if(!autorExist) return res.status(500).json({msg: "El autor no existe"})
            await Autor.destroy(
                {
                    where: {id:pk}
                }
            )
            res.status(200).json({msg: "El autor ha sido eliminado"})
        } catch (error) {
            
        }
        
    }


}