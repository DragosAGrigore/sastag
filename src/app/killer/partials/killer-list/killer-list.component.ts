import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sas-killer-list',
  standalone: true,
  imports: [],
  templateUrl: './killer-list.component.html',
  styleUrl: './killer-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KillerListComponent {

}
