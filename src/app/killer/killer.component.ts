import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sas-killer',
  standalone: true,
  imports: [],
  templateUrl: './killer.component.html',
  styleUrl: './killer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KillerComponent {

}
