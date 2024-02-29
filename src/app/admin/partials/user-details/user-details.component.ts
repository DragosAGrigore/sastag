import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sas-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {

}
