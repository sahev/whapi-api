import { PageData } from "./pagedata";

export class Utils {
  getPageData(page: string) {          
    return new PageData(PageData.pageData).getPageData(PageData.pageData, page)
  }
}