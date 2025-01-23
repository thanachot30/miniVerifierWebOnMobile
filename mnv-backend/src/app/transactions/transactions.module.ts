import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TransactionsGateway } from './transactions.gateway';

@Module({
  providers: [TransactionsService, TransactionsGateway],
  controllers: [TransactionsController],
})
export class TransactionsModule {}
