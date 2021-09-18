import { Module } from '@nestjs/common';
import { DeviceModule } from './device/device.module';
import { InstanceModule } from './instances/instance.module';

@Module({
  imports: [InstanceModule, DeviceModule],
  controllers: [],
  providers: [],
})
export class AppsModule {}
