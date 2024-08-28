import { getMessagesBetweenUsers } from '../../../backend/services/ChatService';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { userId, recipientId } = req.query;
        const messages = await getMessagesBetweenUsers(userId, recipientId);

        return res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
