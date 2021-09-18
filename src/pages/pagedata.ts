export class Page {
    static pageData: any = [];
    static pageOptions: any;
    static pageSession: any;
  
    setPageData(data: object) {
      Page.pageData.push(data);
    }

    getPageData(clientName: string) {
      let resp: any;
      Page.pageData.map((res) => {
        if (res.session == clientName) {
          resp = res.page;
          Page.pageOptions = res.options;
          Page.pageSession = res.session;
        }
      });
      return resp;
    }
  }    
  