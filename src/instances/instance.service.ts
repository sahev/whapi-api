import { ConsoleLogger, Injectable } from '@nestjs/common';
import { create, SocketState } from 'venom-bot';
import { Page } from "../pages/pagedata";
import { Whatsapp } from '../whatsapp/whatsapp.service'

@Injectable()
export class InstanceService {

  async newInstance(instance): Promise<object> {
    await create(instance)
      .then((client) => this.savePage(client))
      .catch((error) => console.log(error));
    return { instance };
  }
  
  savePage(client) {
    new Page().setPageData(client);
  }

  async getInstanceStatus(instance: string) {    
    const wa = new Whatsapp(instance); 
    const result = await wa.getConnectionState();
    const { wid: { user } }  =  await wa.getHostDevice();        
    return { instance: Page.pageSession, status: result };
  }
}
