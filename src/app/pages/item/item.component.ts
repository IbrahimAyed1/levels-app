import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { MenuService } from '../../core/services/menu.service';
import { MenuItem } from '../../core/models/menu.models';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterLink, NavComponent, FooterComponent, RevealDirective],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private svc = inject(MenuService);

  item = signal<MenuItem | null>(null);
  related = signal<MenuItem[]>([]);

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      const slug = p.get('slug') ?? '';
      const found = this.svc.findBySlug(slug);
      this.item.set(found ?? null);
      this.related.set(found ? this.svc.relatedTo(found) : []);
    });
  }

  letterColor(name: string): string {
    const palette = ['#b89766', '#8a7a5e', '#c4a87a', '#9e8c6a', '#d4b88a'];
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % palette.length;
    return palette[h];
  }
}
