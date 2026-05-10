export interface MenuItem {
  name: string;
  price: string;
  desc: string;
  n: string;
  slug: string;
  cat: string;
  catId: string;
}

export interface MenuCategory {
  id: string;
  cat: string;
  items: MenuItem[];
}

export interface GiftTier {
  id: string;
  name: string;
  price: string;
  tag: string;
  desc: string;
}
