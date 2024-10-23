import { WebSocketServer, WebSocket } from 'ws';
// import { v4 as uuidv4 } from 'uuid';

export const initWebSocketServer = (port: number) => {
  const wss = new WebSocketServer({ port });

  wss.on('listening', () => {
    console.log(`WebSocket server started on ws://localhost:${port}`);
  });

  wss.on('connection', (ws: WebSocket) => {
    console.log('New connection established');

    ws.on('message', (message: string) => {
      handleMessage(ws, message);
    });

    ws.on('close', () => {
      console.log('Connection closed');
    });
  });

  return wss;
};

function handleMessage(ws: WebSocket, message: string) {
  console.log(`Received message: ${message}`);
  console.log(`ws: ${ws}`);
  // Logic for handling incoming requests will go here
}
