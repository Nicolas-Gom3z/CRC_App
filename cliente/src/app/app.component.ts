import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import jsonData from './mockup/response.json';
import { MakeResponseComponent } from "./pages/make-response/make-response.component";
import { HeaderComponent } from "./shared/header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MakeResponseComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CRC_App';

  users: any[] = jsonData;

}
