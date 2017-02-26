import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() metaDescription: string;
  @Input() metaImage: string;

  ngOnInit() {
  }



}
