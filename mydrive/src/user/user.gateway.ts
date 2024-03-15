import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

// @WebSocketGateway(null, {
//   namespace: 'user',
//   cors: {
//     origin: ['*'],
//   },
// })

@WebSocketGateway({ namespace: 'user' })
export class UserGateWay
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger(UserGateWay.name);

  private io: any;

  // @WebSocketServer()
  // private io: any;

  afterInit(server: Server) {
    this.logger.log('afterInit ');
    this.io = server;
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log('handleConnection - socket id: ' + client.id);
  }

  handleDisconnect(client: Socket) {
    this.logger.log('connected sockets: ' + this.io.sockets.size);
  }

  @SubscribeMessage('events')
  handleEvent(client: any, data: any): string {
    this.io.emit('harchi', 'salam mapsa');
    // client.broadcast.emit('harchi', 'salam mapsa');
    this.logger.debug('socket id: ' + client.id);
    return data;
  }
}
