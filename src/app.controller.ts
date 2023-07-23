import { Controller } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

import { SettingsDto } from './app.dtos';
import { QUEUE_NAME } from './app.module';

@Controller()
export class AppController {
  constructor(
    @InjectQueue(QUEUE_NAME) private queue: Queue<SettingsDto, null>,
  ) {}
}
