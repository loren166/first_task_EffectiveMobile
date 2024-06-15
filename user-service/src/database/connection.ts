import {AppDataSource} from "../ormconfig";

export const dataSource = AppDataSource.initialize()
    .then(() => {
        console.log('Подключение к бд успешно установлено!');
    })
    .catch((err) => {
        console.error('Ошибка при подключении к бд:', err);
    });