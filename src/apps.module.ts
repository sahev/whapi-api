import { Module } from '@nestjs/common';
import { InstanceController } from './instances/instance.controller';
import { InstanceService } from './instances/instance.service';

@Module({
  imports: [],
  controllers: [InstanceController],
  providers: [InstanceService],
})
export class AppsModule {}
