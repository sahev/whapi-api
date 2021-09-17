import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PageData } from 'src/pages/pagedata';
import { InstanceService } from './instance.service';

@Controller('instance')
export class InstanceController {
  constructor(private readonly instanceService: InstanceService) {}

  @Post()
  async newInstance(@Body() data): Promise<string> {
    // create new instance from venom
    await this.instanceService.newInstance(data.name);
    return JSON.parse(`{ \"r\": \"post\", \"name\": \"${data.name}\"}`)
  }

  @Get(':id')
  getInstance(@Param() data): string {
    // get instance

    return JSON.parse(`{ \"r\": \"get\", \"id\": \"${data.id}\"}`)
  }

  @Get("status/:instanceName")
  getInstanceStatus(@Param() instanceName: string) {
    return this.instanceService.getInstanceStatus(instanceName);
  }
}
