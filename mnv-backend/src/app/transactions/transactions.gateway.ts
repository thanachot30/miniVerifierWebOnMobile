import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'ws';
import { Logger } from '@nestjs/common';
import { WebSocket } from 'ws';

@WebSocketGateway() // You can specify a port or options here if needed
export class TransactionsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(TransactionsGateway.name);
  private clients = new Map<string, WebSocket>(); // Store clients by a unique ID

  // Generate a unique ID for each client
  private generateClientId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  // When a client connects
  handleConnection(client: WebSocket) {
    const clientId = this.generateClientId();
    this.clients.set(clientId, client); // Add client to the Map
    this.logger.log(`Client connected with ID: ${clientId}`);
    // Optional: Send client their ID
    client.send(
      JSON.stringify({
        event: 'welcome',
        data: {
          clientId: clientId,
        },
      })
    );
  }

  // When a client disconnects
  handleDisconnect(client: WebSocket) {
    const clientId = [...this.clients.entries()].find(
      ([, ws]) => ws === client
    )?.[0];
    if (clientId) {
      this.clients.delete(clientId); // Remove client from the Map
      console.log(`Client disconnected with ID: ${clientId}`);
    }
  }

  // Broadcast message to all clients
  broadcast(data: any) {
    this.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  }

  @SubscribeMessage('message')
  handleMessage(client: WebSocket, payload: any): void {
    console.log('Received from client:', payload);
    // client.send(`Server received: ${payload}`);

    const clientId = [...this.clients.entries()].find(
      ([, ws]) => ws === client
    )?.[0];
    if (clientId) {
      client.send(`Server received: ${payload}`);
    }
  }

  sendMessageToClient(clientId: string, message: string): void {
    const client = this.clients.get(clientId);
    if (client && client.readyState === WebSocket.OPEN) {
      client.send(message);
    } else {
      console.log(`Client with ID ${clientId} is not connected.`);
    }
  }
}
