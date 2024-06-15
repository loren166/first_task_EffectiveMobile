"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const ormconfig_1 = require("../ormconfig");
exports.dataSource = ormconfig_1.AppDataSource.initialize()
    .then(() => {
    console.log('Подключение к бд успешно установлено!');
})
    .catch((err) => {
    console.error('Ошибка при подключении к бд:', err);
});
