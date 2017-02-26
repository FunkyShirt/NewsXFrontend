import { Component } from '@angular/core';
import { StatesService } from './states.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StatesService]
})
export class AppComponent {
    constructor(states: StatesService){
    }
}
