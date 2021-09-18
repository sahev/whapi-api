import { Module } from '@nestjs/common';
import { Whatsapp } from './whatsapp.service';

@Module({
  imports: [],
  controllers: [],
  providers: [Whatsapp],
})
export class WhatsappModule {}
