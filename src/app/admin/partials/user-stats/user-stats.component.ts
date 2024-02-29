import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sas-user-stats',
  standalone: true,
  imports: [],
  templateUrl: './user-stats.component.html',
  styleUrl: './user-stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserStatsComponent {

}
