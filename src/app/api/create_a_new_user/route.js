import axios from 'axios';

export default async function handler(req, res) {
    const { NEXT_PUBLIC_API_KEY } = process.env;
    const userId = req.body.userId;

    try {
        const response = await axios.post('https://api.circle.com/v1/users', { id: userId }, {
            headers: {
                'Authorization': `Bearer ${NEXT_PUBLIC_API_KEY}`
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}