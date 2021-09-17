import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Utils } from 'src/pages/page';
import { create, Whatsapp } from 'venom-bot';
import { PageData } from "../pages/pagedata";

@Injectable()
export class InstanceService {
  async newInstance(instanceName): Promise<void> {
    // start instance
    await create(instanceName)
      .then((client) => this.savePage(client))
      .catch((error) => console.log(error));


  }
  savePage(client) {
    new PageData(client);    
    
  }

  getInstanceStatus(instance: string) {
    let bot = new Utils().getPageData(instance);
    console.log(bot)
 
    return "te"
    
  }

}
