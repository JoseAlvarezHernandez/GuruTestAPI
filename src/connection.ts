import { Sequelize } from 'sequelize'

const DB_HOST: string = process.env.DB_HOST || ''
const DB_NAME: string = process.env.DB_NAME || '' 
const DB_USER: string = process.env.DB_USER || '' 
const DB_PW: string = process.env.DB_PW || ''

export const connection = new Sequelize(DB_NAME, DB_USER, DB_PW, {
    host: DB_HOST,
    dialect: 'mysql',
    pool: {max: 100, min: 1}
})

export const auth = async (): Promise<void> => {
    await connection.sync()
    connection.authenticate().then(() => console.log('Database connected...')).catch(err => console.log(err))
}

export const close = async (): Promise<void> => {
    await connection.close()
}

auth()