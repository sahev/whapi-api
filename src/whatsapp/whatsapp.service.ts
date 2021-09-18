import { BadRequestException } from '@nestjs/common';
import { Page } from 'src/pages/pagedata';
import { create, Whatsapp as WA } from 'venom-bot';

export class Whatsapp extends WA {
    constructor(instance) {
        try {
            const page = new Page().getPageData(instance);
            super(page);
            return new WA(page);
        } 
        catch {
            throw new BadRequestException('Disconnected instance');
        }
    }
}