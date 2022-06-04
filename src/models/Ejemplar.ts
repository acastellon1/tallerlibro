import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Libro } from './Libro';
import { Prestar, PrestarI} from './Prestar';
import { Usuario } from './Usuario';

export class Ejemplar extends Model{
    public localizacion!: string;
    public LibroId!: number;
}

export interface EjemplarI {
    localizacion: string;
    LibroId: number;
    
}

Ejemplar.init(
    {
        localizacion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    },

    {
        tableName: "ejemplares",
        sequelize: database,
        timestamps: false
    }
)

Libro.hasMany(Ejemplar);
Ejemplar.belongsTo(Libro);

Usuario.belongsToMany(Ejemplar, {through: Prestar})
Ejemplar.belongsToMany(Usuario, {through: Prestar})