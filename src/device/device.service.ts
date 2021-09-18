import { ConsoleLogger, Injectable } from '@nestjs/common';
import { create, HostDevice, SocketState } from 'venom-bot';
import { Whatsapp } from '../whatsapp/whatsapp.service'

@Injectable()
export class DeviceService {

  async getHostDevice(instance: string): Promise<HostDevice> {
    const wa = new Whatsapp(instance);
    const device  =  await wa.getHostDevice();
    return device;
  }
}
