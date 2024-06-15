import {AppDataSource} from "../ormconfig.js";
import History from "../Entities/history.js";

const historyRepository = AppDataSource.getRepository(History)

class HistoryService {
    async logAction(userid, action) {
        const newLog = historyRepository.create({ userid, action })
        return await historyRepository.save(newLog)
    }

    async getHistory(userId, page = 1, limit = 10) {
        const offset = (page - 1) * limit
        const [result, total] = await historyRepository.findAndCount({
            where: {Id: userId},
            order: {timestamp : 'DESC'},
            skip: offset,
            take: limit
        })
        return {
            data: result,
            total,
            page,
            limit
        }
    }
}

export default new HistoryService();