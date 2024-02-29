import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sas-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {

}
