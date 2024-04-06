import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import GlobalApi from "@/app/_utils/GlobalApi";
import {useAuth} from "@clerk/nextjs";

const SERVER_URL = "http://localhost:1337";

interface Message {
    id: number;
    content: string;
    senderId: number;
}

function ChatComponent({userId, sellerId}: { userId: number, sellerId: number }) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [roomId, setRoomId] = useState<number | null>(null);

    const { getToken } = useAuth(); // Используем хук Clerk для получения токена

    useEffect(() => {
        const connectSocket = async () => {
            const token = await getToken(); // Получаем токен от Clerk
            // Устанавливаем соединение с socket.io, передавая токен аутентификации
            const socket = io(SERVER_URL, {
                auth: {
                    strategy: 'jwt',
                    token: token,
                },
            });

            socket.on('connect', async () => {
                // Поиск или создание комнаты
                const room = await GlobalApi.findOrCreateRoom(userId, sellerId, token);
                setRoomId(room.id);
                socket.emit('join-room', room.id);

                // Загрузка истории сообщений
                const res = await GlobalApi.getMessages(room.id, token);
                setMessages(res?.data);

                // Обработка новых сообщений
                socket.on('new-message', (message: Message) => {
                    setMessages(prevState => [...prevState, message]);
                });
            });

            return () => {
                socket.close(); // Отключаемся при размонтировании компонента
            };
        };

        if (userId && sellerId) {
            connectSocket();
        }
    }, [userId, sellerId, getToken]); // Добавляем getToken в список зависимостей

    const handleSendMessage = async () => {
        if (!newMessage || !roomId) return;
        const token = await getToken(); // Повторно получаем токен для отправки сообщения
        // Здесь реализация отправки сообщения может зависеть от вашего бэкенда

        // GlobalApi.sendMessage({ roomId, content: newMessage, senderId: userId, token });
        setNewMessage('');
    };

    return (
        <div>
            <div>
                {messages && messages.length > 0 ? (
                    messages.map((message, i) => (
                        <div key={i}>{message.content}</div>
                    ))
                ) : (
                    <div className="no-messages">No messages yet. Start the conversation!</div>
                )}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Отправить</button>
        </div>
    );
}

export default ChatComponent;