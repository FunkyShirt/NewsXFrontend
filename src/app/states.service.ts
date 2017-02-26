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

  constructor() {
    this.pages = {};
  }
  addPage(name: string, page: PageComponent) {
      this.pages[name] = page;
  }
  tranition(name: string, data: any){
      _.forEach(this.pages, (p, n)=>{
          if (name != n) {
              p.hide();
          } else {
              p.load(data);
          }
      });
  }

}
