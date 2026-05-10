import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'menu', loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent) },
  { path: 'gifts', loadComponent: () => import('./pages/gifts/gifts.component').then(m => m.GiftsComponent) },
  { path: 'locations', loadComponent: () => import('./pages/locations/locations.component').then(m => m.LocationsComponent) },
  { path: 'item/:slug', loadComponent: () => import('./pages/item/item.component').then(m => m.ItemComponent) },
  { path: '**', redirectTo: '' },
];
