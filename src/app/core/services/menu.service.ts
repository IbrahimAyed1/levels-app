import { Injectable } from '@angular/core';
import { MenuCategory, MenuItem, GiftTier } from '../models/menu.models';

const RAW_MENU: (Omit<MenuCategory, 'items'> & { items: Omit<MenuItem, 'n' | 'slug' | 'cat' | 'catId'>[] })[] = [
  { id: 'picks', cat: 'Picks for you', items: [
    { name: 'Iced Spanish Latte', price: '2.400', desc: 'Espresso, condensed milk, ice. Sweet, creamy, the house favourite.' },
    { name: 'Tiramisu', price: '3.700', desc: 'Made in-house. Mascarpone, espresso, dusted cocoa.' },
    { name: 'Cappuccino', price: '2.000', desc: '1:1:1 — espresso, steamed milk, foam. Classic ratio.' },
    { name: 'Americano', price: '1.900', desc: 'Double espresso lengthened with hot water.' },
    { name: 'Hot Chocolate', price: '2.400', desc: 'Single-origin dark, whole milk, steamed slow.' },
    { name: 'Brownies Cookies', price: '1.000', desc: 'Dense, fudgy, cracked tops. Baked daily.' },
  ]},
  { id: 'hot', cat: 'Hot drinks', items: [
    { name: 'Espresso', price: '1.400', desc: 'Single shot, pulled short. Our house blend.' },
    { name: 'Piccolo', price: '1.900', desc: 'Ristretto + warm milk in a small glass.' },
    { name: 'Flat White', price: '1.900', desc: 'Double ristretto, micro-foamed whole milk.' },
    { name: 'Cortado', price: '1.900', desc: 'Equal parts espresso & warm milk.' },
    { name: 'Cappuccino', price: '2.000', desc: 'Classic ratio, dusted with cocoa.' },
    { name: 'Cafe Latte', price: '2.000', desc: 'Double espresso, steamed milk, light foam.' },
    { name: 'Americano', price: '1.900', desc: 'Double espresso lengthened with hot water.' },
    { name: 'Hot Spanish Latte', price: '2.400', desc: 'Espresso, condensed milk, steamed milk.' },
    { name: 'Hot Matcha', price: '2.400', desc: 'Ceremonial Uji, oat or whole milk.' },
    { name: 'Dark Mocha', price: '2.200', desc: 'Espresso, dark chocolate, steamed milk.' },
    { name: 'Hot White Mocha', price: '2.200', desc: 'Espresso, white chocolate, steamed milk.' },
    { name: 'Hot Chocolate', price: '2.400', desc: 'Single-origin dark, whole milk.' },
  ]},
  { id: 'cold', cat: 'Cold drinks', items: [
    { name: 'Iced Americano', price: '1.600', desc: 'Double espresso over ice, topped with cold water.' },
    { name: 'Iced Latte', price: '2.000', desc: 'Double espresso, cold milk, ice.' },
    { name: 'Iced Rose Latte', price: '2.000', desc: 'Espresso, rose syrup, cold milk.' },
    { name: 'Espresso Tonic', price: '2.000', desc: 'Espresso poured over tonic & ice.' },
    { name: 'Iced Hazelnut Latte', price: '2.200', desc: 'House hazelnut, espresso, cold milk.' },
    { name: 'Iced Salted Caramel Latte', price: '2.200', desc: 'Salted caramel, espresso, cold milk.' },
    { name: 'Ice Matcha', price: '2.200', desc: 'Ceremonial matcha, cold milk, ice.' },
    { name: 'Iced Spanish Latte', price: '2.400', desc: 'The signature. Sweet, creamy.' },
    { name: 'Strawberry Ice Tea', price: '2.000', desc: 'Brewed black tea, fresh strawberry.' },
    { name: 'Green Apple Iced Tea', price: '2.000', desc: 'Brewed green tea, green apple syrup.' },
  ]},
  { id: 'drip', cat: 'Drip drink', items: [
    { name: 'Hot V60', price: '2.500', desc: 'Hand-poured filter coffee. Rotating single origin.' },
    { name: 'Iced V60', price: '2.500', desc: 'V60 brewed onto ice. Bright, clean.' },
  ]},
  { id: 'mojito', cat: 'Mojito', items: [
    { name: 'Black Passion', price: '2.000', desc: 'Passion fruit, mint, lime, soda.' },
    { name: 'Blue Sky', price: '2.000', desc: 'Blue curaçao, mint, lime, soda.' },
    { name: 'Red Roses Mojito', price: '2.200', desc: 'Rose, raspberry, mint, lime.' },
  ]},
  { id: 'summer', cat: 'Summer list', items: [
    { name: 'Punch Lime', price: '2.400', desc: 'Citrus punch over crushed ice.' },
    { name: 'Iced Chocolate', price: '2.400', desc: 'Cold dark chocolate, milk, ice.' },
    { name: 'Creamy Espresso', price: '1.800', desc: 'Espresso shaken with cream.' },
  ]},
  { id: 'korean', cat: 'Korean bread', items: [
    { name: 'Plain Korean Bread', price: '1.100', desc: 'Soft milk bread, lightly sweet.' },
    { name: 'Custard Korean Bread', price: '1.100', desc: 'Filled with vanilla custard.' },
    { name: 'Cheese Korean Bread', price: '1.100', desc: 'Cream cheese filling.' },
    { name: 'Chocolate Korean Bread', price: '1.100', desc: 'Dark chocolate ganache filling.' },
    { name: 'Pistachio Korean Bread', price: '1.100', desc: 'Pistachio cream filling.' },
    { name: 'Strawberry Cheesecake Korean Bread', price: '1.100', desc: 'Strawberry & cheesecake filling.' },
    { name: 'Box of 4pcs Korean Bread', price: '3.500', desc: 'Mixed selection of four.' },
  ]},
  { id: 'sweets', cat: 'Sweets', items: [
    { name: 'Tiramisu', price: '3.700', desc: 'Mascarpone, espresso, dusted cocoa.' },
    { name: 'Churros', price: '1.900', desc: 'Hot, cinnamon-sugared, with chocolate dip.' },
    { name: 'Brownies Melt', price: '5.000', desc: 'Warm brownie, ice cream, hot fudge.' },
    { name: 'Victoria Cheesecake', price: '4.500', desc: 'Baked cheesecake, jam centre.' },
    { name: 'Torrijas', price: '4.500', desc: 'Spanish-style cinnamon toast, milk-soaked.' },
    { name: 'Choco Crunch', price: '3.500', desc: 'Chocolate mousse, hazelnut crunch.' },
    { name: 'Choco Crunch Small', price: '3.500', desc: 'The smaller version. Same idea.' },
    { name: 'Elba Cream Caramel', price: '3.500', desc: 'Soft caramel custard, burnt-sugar top.' },
  ]},
  { id: 'cookies', cat: 'Cookies & croissant', items: [
    { name: 'Kinder Cookies', price: '1.000', desc: 'Soft-baked, Kinder chocolate centre.' },
    { name: 'Pistachio Cookies', price: '1.000', desc: 'Pistachio cream, sea salt.' },
    { name: 'Brownies Cookies', price: '1.000', desc: 'Dense, fudgy, cracked tops.' },
    { name: 'Chocolate Croissant', price: '1.200', desc: 'Laminated dough, dark chocolate batons.' },
  ]},
  { id: 'wraps', cat: 'Wraps', items: [
    { name: 'Spicy Chicken Wrap', price: '2.200', desc: 'Marinated chicken, garlic sauce, pickles.' },
  ]},
  { id: 'ramadan', cat: 'Ramadan special', items: [
    { name: 'Strawberry White Chocolate', price: '16.000', desc: 'Whole cake. Serves 6–8.' },
    { name: 'Nut Cheesecake with Maple Syrup', price: '16.000', desc: 'Whole cake. Serves 6–8.' },
    { name: 'Blossom Berries Cake', price: '16.000', desc: 'Whole cake. Serves 6–8.' },
    { name: 'Choco Crunch', price: '16.000', desc: 'Whole cake. Serves 6–8.' },
    { name: 'Caramel Crown Cake', price: '16.000', desc: 'Whole cake. Serves 6–8.' },
  ]},
  { id: 'beverages', cat: 'Beverages', items: [
    { name: 'Mineral Water', price: '0.700', desc: '500ml. Local source.' },
    { name: 'Sparkling Water', price: '0.700', desc: '500ml. Naturally carbonated.' },
  ]},
];

@Injectable({ providedIn: 'root' })
export class MenuService {
  readonly categories: MenuCategory[];
  readonly flat: MenuItem[];
  readonly gifts: GiftTier[];

  constructor() {
    let idx = 0;
    this.categories = RAW_MENU.map(cat => ({
      ...cat,
      items: cat.items.map(item => {
        idx++;
        const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return { ...item, n: String(idx).padStart(3, '0'), slug: `${slug}-${String(idx).padStart(3, '0')}`, cat: cat.cat, catId: cat.id };
      }),
    }));

    this.flat = this.categories.flatMap(c => c.items);

    this.gifts = [
      { id: 'standard', name: 'Standard', price: '5', tag: 'For a simple gesture.', desc: 'A small token. Covers a coffee and a sweet on a quiet afternoon. Comes in a hand-stamped envelope.' },
      { id: 'premium', name: 'Premium', price: '10', tag: 'For a meaningful taste.', desc: 'Enough for a proper visit. Two drinks, two pastries, time to sit. Wrapped in waxed paper, tied with twine.' },
      { id: 'reserve', name: 'Reserve', price: '15', tag: 'For the full experience.', desc: 'The whole bar. Drinks, slow brew, a slice of cake to share. Presented in a linen-bound card.' },
    ];
  }

  findBySlug(slug: string): MenuItem | undefined {
    return this.flat.find(i => i.slug === slug);
  }

  relatedTo(item: MenuItem): MenuItem[] {
    const same = this.flat.filter(i => i.catId === item.catId && i.slug !== item.slug);
    const pool = same.length >= 3 ? same : this.flat.filter(i => i.slug !== item.slug);
    return pool.slice(0, 3);
  }
}
