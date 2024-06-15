import {AppDataSource} from "../ormconfig";

export const dataSource = AppDataSource.initialize()
    .then(() => {
        console.log('Succeeded DB connection!');
    })
    .catch((err) => {
        console.error('Failed to connect to DB:', err);
    });