import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TransactionsGateway } from './transactions/transactions.gateway';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
