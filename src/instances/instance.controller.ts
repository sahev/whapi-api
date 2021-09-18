import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Page } from 'src/pages/pagedata';
import { SocketState } from 'venom-bot';
import { InstanceService } from './instance.service';

@Controller('instance')
export class InstanceController {
  constructor(private readonly instanceService: InstanceService) {}

  @Post()
  async newInstance(@Body() data): Promise<object> {
    return await this.instanceService.newInstance(data.name);
  }

  @Get("status/:name")
  getInstanceStatus(@Param() data) {    
    return this.instanceService.getInstanceStatus(data.name);
  }
}
