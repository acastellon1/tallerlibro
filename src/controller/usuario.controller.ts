import { Request, Response } from "express";
import { Usuario, UsuarioI } from "../models/Usuario";

export class UsuarioController{
    public async getAllUsuario(req: Request, res: Response){
        try {
            const usuario: UsuarioI[] = await Usuario.findAll() //select * from usuarios;
            res.status(200).json({usuario}) 
        } catch (error) {
            
        }
    }

    public async getOneUsuario(req: Request, res: Response){
        const { id:idParam } = req.params
  
        try {
            const usuario:UsuarioI | null = await Usuario.findOne(
                {
                    where: {
                         id: idParam
                      }
                }
            )
  
          res.status(200).json({usuario})
        } catch (error) {
            res.status(500).json({msg: "Error interno"})
        }
      }

      public async createUsuario(req: Request, res: Response){
        const {
            id,
            nombre, 
            apellidos,
            direccion,
            telefono
        } = req.body;
  
        try {
            let body: UsuarioI = {
              nombre, 
              apellidos,
              direccion,
              telefono
            }
  
            const usuario = await Usuario.create({...body});
            res.status(200).json({usuario});
        } catch (error) {
            
        }
      }

      public async updateUsuario(req: Request, res: Response){
        const { id: pk } = req.params;
  
        const{
            id,
            nombre, 
            apellidos,
            direccion,
            telefono
        } = req.body
  
        try {
            let body: UsuarioI = {
                
              nombre, 
              apellidos,
              direccion,
              telefono

            }
  
            const usuarioExist: UsuarioI | null = await Usuario.findByPk(pk)
          //const userExist: UsuarioI | null = await Usuario.findOne(
          //    {
          //    where: { id: pk }
          //    }
              
          //);
  
            if (!usuarioExist) return res.status(500).json({msg: "El usuario no existe"})
            await Usuario.update(
                body, {
                    where: {id: pk}
                }
            );
  
        } catch (error) {
            
        }
  
        const usuario: UsuarioI | null = await Usuario.findByPk(pk)
        if(usuario) return res.status(200).json({usuario})
      }

      public async deleteUsuario(req: Request, res: Response){
        const { id: pk } = req.params;
        
        try {
            const usuarioExist: UsuarioI | null = await Usuario.findByPk(pk)
            if(!usuarioExist) return res.status(500).json({msg: "El usuario no existe"})
            await Usuario.destroy(
                {
                    where: {id:pk}
                }
            )
            res.status(200).json({msg: "El usuario ha sido eliminado"})
        } catch (error) {
            
        }
        
    }
}