interface Player {
  id: string;
  username: string;
  password: string;
  ws: WebSocket;
}

interface GameRoom {
  id: string;
  players: string[];
  gameStarted: boolean;
  board: Record<string, any>;
}

const players: Map<string, Player> = new Map();
const gameRooms: Map<string, GameRoom> = new Map();
