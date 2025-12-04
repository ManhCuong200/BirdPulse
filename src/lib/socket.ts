import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const getSocket = (): Socket => {
    if (!socket) {
        // Replace with your actual backend URL
        const URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

        socket = io(URL, {
            autoConnect: false,
            transports: ['websocket'],
        });

        socket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from WebSocket server');
        });

        // Listen for specific auction events
        socket.on('auction:priceUpdated', (data) => {
            console.log('Price updated:', data);
        });

        socket.on('auction:outbid', (data) => {
            console.log('Outbid notification:', data);
        });
    }
    return socket;
};

export const connectSocket = () => {
    const s = getSocket();
    if (!s.connected) {
        s.connect();
    }
};

export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
};
