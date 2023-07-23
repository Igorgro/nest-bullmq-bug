import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BullModule } from '@nestjs/bullmq';

export const QUEUE_NAME = 'myqueue';

const queueModule = BullModule.registerQueue({
  name: QUEUE_NAME,
});

console.log(queueModule);

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    queueModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
