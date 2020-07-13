import { DataTypes } from 'sequelize'

import { connection } from '../connection'

const pets = connection.define('Pets', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})