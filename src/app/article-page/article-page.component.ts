import { Component, OnInit, Input } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

const dummy_para = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

@Component({
  selector: 'article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],
})
export class ArticlePageComponent implements OnInit {
    @Input() id: string;
    @Input() title: string;
    @Input() metaDescription: string;
    @Input() metaImage: string;
    @Input() newsSource: string;
    @Input() paragraphs: string[];
    @Input() phrases: string[][];
    @Input() phrase: string[];

  constructor(private http: Http) {
    this.title = "helloworld";
    this.metaDescription = "This is not the case";
    this.metaImage = "http://www.hvac2000.com/wp-content/uploads/2016/11/blue-sky-wallpapers.jpg"
    this.newsSource = "CNN";
    const paragraph = `<p>${dummy_para}</p>`;
    this.paragraphs = new Array(5).fill(paragraph);
  }

  ngOnInit() {
  }

  handleClick(evt: MouseEvent, i: number){
    let params: URLSearchParams = new URLSearchParams();
    params.set("newsid", this.id);
    params.set("method", "timeline");
    params.set("keywords", JSON.stringify(this.phrases[i]));
    this.http.get('13.64.243.189/api/relevantnews', params);
  }
}
