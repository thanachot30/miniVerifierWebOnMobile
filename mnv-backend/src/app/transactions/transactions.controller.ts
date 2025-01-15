import { Body, Controller, Post } from '@nestjs/common';
import { TransactionsGateway } from './transactions.gateway';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionGateway: TransactionsGateway) {}

  @Post('/callback')
  callbackMessage(@Body() body: { clientId: string; message: string }) {
    const { clientId, message } = body;
    console.log(`Broadcasting message: ${message}`);
    this.transactionGateway.sendMessageToClient(clientId, message); // Use the gateway to send the message
    // return { status: 'success', message: 'Message broadcasted' };
  }

  @Post('/start-transaction')
  startTransaction(@Body() body: { clientId: string; message: string }) {
    // return transaction id
  }

  @Post('/check-status')
  checkStatus(@Body() body: { clientId: string; message: string }) {}
}
