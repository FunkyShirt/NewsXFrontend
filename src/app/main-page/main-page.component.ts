import { Component, OnInit, HostBinding } from '@angular/core';
import { StatesService, PageComponent } from '../states.service'
import { Article } from '../../Types/Article'

const article = {
  title: "helloworld",
  description: "This is nice",
  metaImage: "http://vignette2.wikia.nocookie.net/logopedia/images/4/47/CNN_International_logo_2014.png/revision/latest?cb=20140910201936"
}

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, PageComponent {

  @HostBinding('class') classes;

  constructor(private states: StatesService) {
    states.addPage('main', this);
  }
  articles: Article[] = new Array(9).fill(article);

  ngOnInit() {
    this.classes = 'show';
  }

  startcard(e: MouseEvent, i: number) {
    console.log(`clicked ${i}`);
  }

  hide() {
    this.classes = 'hide';
  }

  load(data) {
    // set to the loading state
    // when everything is ready
    // load to the actual view
    this.classes = 'show';
  }

}
