import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sas-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomeComponent {

}
