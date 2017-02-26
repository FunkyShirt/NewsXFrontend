import { Component, OnInit } from '@angular/core';
import { Article } from '../../Types/Article'

const article = <Article>{
    title: "helloworld",
    description: "This is nice",
    metaImage: "http://vignette2.wikia.nocookie.net/logopedia/images/4/47/CNN_International_logo_2014.png/revision/latest?cb=20140910201936"
}

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }
  articles: Article[] = new Array(9).fill(article);

  ngOnInit() {
  }

}
