import httpClient from "../utils/httpClient";


export class NotificationService {
    async notifyUserCreated (user: any): Promise<void> {
        try {
            await httpClient.post('http://localhost:3001/log', {
                userid: user.id,
                action: 'user_created'
            })
        } catch (err) {
            console.error('Failed to notify user creation', err)
        }
    }

    async notifyUserUpdated (user: any): Promise<void> {
        try {
            await httpClient.post('http://localhost:3001/log', {
                userid: user.id,
                action: 'user_updated'
            })
        } catch (err) {
            console.error('Failed to notify user update', err)
        }
    }
}