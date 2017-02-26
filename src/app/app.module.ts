import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArticlePageComponent } from './article-page/article-page.component'
import { CarousleComponent } from './carousle/carousle.component'
import { MdlModule } from 'angular2-mdl';
import { AlertModule } from 'ng2-bootstrap';
import { PopoverModule } from 'ngx-popover';
import 'jquery'

@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    MainPageComponent,
    NavBarComponent,
    ArticlePageComponent,
    CarousleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    PopoverModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
