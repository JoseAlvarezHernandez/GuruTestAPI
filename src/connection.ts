import { Sequelize } from 'sequelize'

const DB_HOST: string = process.env.DB_HOST || ''
const DB_NAME: string = process.env.DB_NAME || '' 
const DB_USER: string = process.env.DB_USER || '' 
const DB_PW: string = process.env.DB_PW || ''

export const connection = new Sequelize(DB_NAME, DB_USER, DB_PW, {
    host: DB_HOST,
    dialect: 'mysql'
})

export const auth = async () => await connection.authenticate()

export const close = async () => await connection.close()