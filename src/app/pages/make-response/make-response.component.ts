import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-make-response',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './make-response.component.html',
  styleUrl: './make-response.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MakeResponseComponent { }
