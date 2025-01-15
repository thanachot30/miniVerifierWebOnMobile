import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
type Props = {};

const WebSocketDemo = (props: Props) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const serverUrl = 'wss://content-starling-tolerant.ngrok-free.app';

  // Initialize WebSocket connection
  useEffect(() => {
    const ws = new WebSocket(serverUrl); // Replace with your WebSocket server URL
    ws.onopen = () => {
      console.log('Connected to WebSocket server');
      console.log(ws);
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      console.log('Message from server:', event.data);
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    ws.onclose = (event) => {
      console.log('Disconnected from WebSocket server');
      setSocket(null);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      ws.close();
    };
  }, []);

  // Send a message to the WebSocket server
  const sendMessage = () => {
    if (socket && input) {
      const message = { event: 'message', data: input }; // Format message correctly
      console.log(message);
      socket.send(JSON.stringify(message)); // Send as JSON
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>WebSocket React Client</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ padding: '8px', marginRight: '8px', width: '300px' }}
        />
        <button onClick={sendMessage} style={{ padding: '8px 16px' }}>
          Send
        </button>
      </div>

      <h2>Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketDemo;
