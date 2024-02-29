import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sas-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
