import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavComponent, FooterComponent, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly cards = [
    { n: '02', t: 'Menu', d: 'Sixty-something things, done well. Hot, cold, sweet, slow.', path: '/menu', deco: 'M' },
    { n: '03', t: 'Gift Cards', d: 'Three tiers. Hand-stamped, paper-wrapped, given well.', path: '/gifts', deco: 'G' },
    { n: '04', t: 'Locations', d: 'Qurum, Muscat. Find us, our hours, our address.', path: '/locations', deco: 'L' },
  ];

  email = signal('');
  sent = signal(false);

  submit(e: Event) {
    e.preventDefault();
    if (this.email()) this.sent.set(true);
  }
}
