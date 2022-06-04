import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';


export class Prestar extends Model{
    public fechaDev!: Date;
    public fechaPres!: Date;
    public UsuarioId!: number;
    public EjemplarId!: number;
}

export interface PrestarI {
    fechaDev: Date;
    fechaPres: Date;
    UsuarioId: number;
    EjemplarId: number;
}

Prestar.init(
    {
        fechaDev: {
            type: DataTypes.DATE,
            allowNull: false
        },

        fechaPres: {
            type: DataTypes.DATE,
            allowNull: false
        },

        UsuarioId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },

        EjemplarId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
    },

    {
        tableName: "prestar",
        sequelize: database,
        timestamps: false
    }
)