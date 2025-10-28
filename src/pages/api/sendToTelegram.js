export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, phone, message } = req.body;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        return res.status(500).json({ error: 'Bot token or chat ID not set' });
    }

    try {
        const fullMessage = `
<b>Новая заявка:</b>
Имя: ${name || 'Не указано'}
Телефон: ${phone || 'Не указан'}
Сообщение: ${message || 'Нет описания'}
`;

        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: fullMessage,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();
        if (!data.ok) throw new Error(data.description || 'Telegram API error');

        res.status(200).json({ success: true });
    } catch (err) {
        console.error('API Error:', err.message);
        res.status(500).json({ error: err.message });
    }
}
