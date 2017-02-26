import { Injectable } from '@angular/core';
import * as _ from 'lodash'

export interface PageComponent {
  // the page component would hide itself
  hide();
  // the page component would load itself
  load(data: any);
}

@Injectable()
export class StatesService {
  pages: { [id: string]: PageComponent };

  constructor() { }
  addPage(name: string, page: PageComponent) {
      pages[name] = page;
  }
  tranition(name: string, data: any){
      _.forEach(pages, (p:PageComponent, n)=>{
          if (name != n) {
              p.hide();
          } else {
              p.load(data);
          }
      });
  }

}
