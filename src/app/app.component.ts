import { Component } from '@angular/core';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faBong } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { faAws } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume1';
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faBong = faBong;
  faPizza = faPizzaSlice;
  faAws = faAws;
}

