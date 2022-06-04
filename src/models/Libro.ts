import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Autor } from './Autor';


export class Libro extends Model{
    public titulo!: string;
    public numeroPagina!: string;
    public editorial!: string;
    public isbn!: number;
    public AutorId!: number;
}

export interface LibroI {
    titulo: string;
    numeroPagina: string;
    editorial: string;
    isbn: number;
    AutorId: number;
    
}

Libro.init(
    {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },

        numeroPagina: {
            type: DataTypes.STRING,
            allowNull: false
        },

        editorial: {
            type: DataTypes.STRING,
            allowNull: false
        },

        isbn: {
            type: DataTypes.BIGINT,
            allowNull: false
        },

        
    },

    {
        tableName: "libros",
        sequelize: database,
        timestamps: false
    }
)

Autor.hasMany(Libro);
Libro.belongsTo(Autor);