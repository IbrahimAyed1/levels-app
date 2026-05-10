import { Component, computed, signal, inject, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { MenuService } from '../../core/services/menu.service';
import { MenuCategory } from '../../core/models/menu.models';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NavComponent, FooterComponent, RevealDirective],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit, OnDestroy, AfterViewInit {
  private svc = inject(MenuService);

  query = signal('');
  activeCat = signal('picks');

  readonly allCategories = this.svc.categories;

  filtered = computed<MenuCategory[]>(() => {
    const q = this.query().toLowerCase().trim();
    if (!q) return this.allCategories;
    return this.allCategories
      .map(cat => ({ ...cat, items: cat.items.filter(i => i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q)) }))
      .filter(cat => cat.items.length > 0);
  });

  private observers: IntersectionObserver[] = [];
  private sectionEls: HTMLElement[] = [];

  ngAfterViewInit() {
    this.setupScrollSpy();
  }

  ngOnDestroy() {
    this.observers.forEach(o => o.disconnect());
  }

  private setupScrollSpy() {
    setTimeout(() => {
      const sections = document.querySelectorAll<HTMLElement>('.cat-section');
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) this.activeCat.set(e.target.getAttribute('data-id') ?? '');
        });
      }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
      sections.forEach(s => obs.observe(s));
      this.observers.push(obs);
    }, 100);
  }

  scrollTo(id: string) {
    const el = document.getElementById('cat-' + id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnInit() {}
}
