import { DataTypes } from 'sequelize'

import { connection } from '../connection'

const pets = connection.define('Pets', { 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default pets