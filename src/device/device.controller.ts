import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Page } from 'src/pages/pagedata';
import { HostDevice, SocketState } from 'venom-bot';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get(":device")
  getInstanceStatus(@Param() data): Promise<HostDevice> {    
    return this.deviceService.getHostDevice(data.device);
  }
}
