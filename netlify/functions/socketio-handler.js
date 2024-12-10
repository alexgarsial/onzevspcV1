const { Server } = require('socket.io');
const { createServer } = require('http');

exports.handler = async (event, context) => {
  const httpServer = createServer();
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

  io.on('connection', (socket) => {
    const { gameId, playerNumber } = socket.handshake.query;
    
    console.log(`Player ${playerNumber} connected to game ${gameId}`);
    
    socket.join(gameId);
    
    socket.on('play_card', ({ card, capturedCards }) => {
      io.to(gameId).emit('game_state_update', {
        card,
        capturedCards,
        currentPlayer: playerNumber
      });
    });
    
    socket.on('disconnect', () => {
      io.to(gameId).emit('player_left', playerNumber);
    });
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'WebSocket server running' })
  };
};