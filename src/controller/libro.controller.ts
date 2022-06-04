import { Request, Response } from "express";
import { Libro, LibroI } from "../models/Libro";

export class LibroController{
    public async getAllLibro(req: Request, res:Response){
        try {
            const libro: LibroI[] = await Libro.findAll() // select * from ventas;
            res.status(200).json({libro})
        } catch (error) {
            
        }
    }

    public async getOneLibro(req: Request, res: Response){
        const { id:idParam } = req.params
  
        try {
            const libro:LibroI | null = await Libro.findOne(
                {
                    where: {
                         id: idParam
                      }
                }
            )
  
          res.status(200).json({libro})
        } catch (error) {
            res.status(500).json({msg: "Error interno"})
        }
      }

      public async createLibro(req: Request, res: Response){
        const {
          id,
          titulo, 
          numeroPagina,
          editorial,
          isbn,
          AutorId
      } = req.body;
  
      try {
          let body: LibroI = {
            titulo, 
            numeroPagina,
            editorial,
            isbn,
            AutorId
          }
  
          const libro = await Libro.create({...body});
          res.status(200).json({libro});
      } catch (error) {
          
      }
    }

    public async updateLibro(req: Request, res: Response){
        const { id: pk } = req.params;
  
        const{
            id,
            titulo, 
            numeroPagina,
            editorial,
            isbn,
            AutorId
        } = req.body
  
        try {
            let body: LibroI = {
                
                titulo, 
                numeroPagina,
                editorial,
                isbn,
                AutorId

            }
  
            const libroExist: LibroI | null = await Libro.findByPk(pk)
          //const userExist: UsuarioI | null = await Usuario.findOne(
          //    {
          //    where: { id: pk }
          //    }
              
          //);
  
            if (!libroExist) return res.status(500).json({msg: "El libro no existe"})
            await Libro.update(
                body, {
                    where: {id: pk}
                }
            );
  
        } catch (error) {
            
        }
  
        const libro: LibroI | null = await Libro.findByPk(pk)
        if(libro) return res.status(200).json({libro})
      }

      public async deleteLibro(req: Request, res: Response){
        const { id: pk } = req.params;
        
        try {
            const libroExist: LibroI | null = await Libro.findByPk(pk)
            if(!libroExist) return res.status(500).json({msg: "El libro no existe"})
            await Libro.destroy(
                {
                    where: {id:pk}
                }
            )
            res.status(200).json({msg: "El libro ha sido eliminado"})
        } catch (error) {
            
        }
        
    }

}