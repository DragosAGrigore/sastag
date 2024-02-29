import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sas-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {

}
