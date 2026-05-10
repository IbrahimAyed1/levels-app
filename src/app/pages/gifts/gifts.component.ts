import { Component, inject, signal } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { MenuService } from '../../core/services/menu.service';
import { GiftTier } from '../../core/models/menu.models';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [NavComponent, FooterComponent, RevealDirective],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.scss',
})
export class GiftsComponent {
  private svc = inject(MenuService);
  tiers: GiftTier[] = this.svc.gifts;

  selected = signal<GiftTier | null>(null);
  confirmed = signal(false);

  readonly steps = [
    { n: '01', title: 'Choose a tier', body: 'Standard, Premium, or Reserve. Each is wrapped differently and presented by hand.' },
    { n: '02', title: 'Pick it up in store', body: 'We prepare it fresh. Come by the bar, give us your order number, and collect it same day.' },
    { n: '03', title: 'Give it well', body: "The recipient redeems it whenever they like. No rush, no expiry. Just coffee when they're ready." },
  ];

  select(tier: GiftTier) {
    this.selected.set(tier);
    this.confirmed.set(false);
  }

  confirm() {
    if (this.selected()) this.confirmed.set(true);
  }
}
