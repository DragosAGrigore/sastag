import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sas-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {

}
