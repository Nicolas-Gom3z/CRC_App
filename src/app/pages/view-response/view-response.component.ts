import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import jsonData from '../../mockup/response.json';


@Component({
  selector: 'app-view-response',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './view-response.component.html',
  styleUrl: './view-response.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewResponseComponent {
  users: any[] = jsonData;

}
