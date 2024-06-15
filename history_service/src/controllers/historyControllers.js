import historyService from "../services/historyServices.js";

class HistoryControllers {
    async logAction(req, res) {
        const {userid, action} = req.body
        try {
            const log = await historyService.logAction(userid, action)
            res.status(201).json(log)
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    }

    async getHistory(req, res) {
        const {userid} = req.query
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        try {
            const history = await historyService.getHistory(userid, page, limit)
            res.status(200).json(history)
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    }
}

export default new HistoryControllers();