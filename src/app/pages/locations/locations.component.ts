import { Component } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [NavComponent, FooterComponent, RevealDirective],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {
  today = new Date().toLocaleDateString('en-GB', { weekday: 'long' });

  readonly hours = [
    { day: 'Monday',    open: '08:00', close: '22:00' },
    { day: 'Tuesday',   open: '08:00', close: '22:00' },
    { day: 'Wednesday', open: '08:00', close: '22:00' },
    { day: 'Thursday',  open: '08:00', close: '22:00' },
    { day: 'Friday',    open: '09:00', close: '23:00' },
    { day: 'Saturday',  open: '09:00', close: '23:00' },
    { day: 'Sunday',    open: '09:00', close: '22:00' },
  ];

  readonly coming = [
    { city: 'Salalah', note: 'Q3 2026' },
    { city: 'Dubai',   note: '2027' },
    { city: 'Riyadh',  note: '2027' },
  ];
}
