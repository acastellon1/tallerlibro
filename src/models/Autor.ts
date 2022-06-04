import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';

export class Autor extends Model{
    public nombre!: string;
}


export interface AutorI{
    nombre: string;
}

Autor.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },

    {
        tableName: "autores",
        sequelize: database,
        timestamps: false
    }
)