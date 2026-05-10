import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  @Input() active = '';

  readonly links = [
    { path: '/menu',      label: 'Menu' },
    { path: '/gifts',     label: 'Gift Cards' },
    { path: '/locations', label: 'Locations' },
  ];
}
