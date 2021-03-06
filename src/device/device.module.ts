import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';

@Module({
  imports: [],
  controllers: [DeviceController],
  providers: [DeviceService],
})
export class DeviceModule {}
