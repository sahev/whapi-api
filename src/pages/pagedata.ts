export class PageData {
    static pageData: any = [];
  
    constructor(data: object) {
        PageData.pageData.push(data);
    }
  
    getPageData(data: any, clientName: any) {
      let resp = [];
      data.map((res) => {
        if (res.session === clientName) resp = res;
      });
      return resp;
    }
  }