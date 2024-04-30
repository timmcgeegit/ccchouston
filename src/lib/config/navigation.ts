// ccchouston/src/lib/config/navigation.ts
import type { NavigationItem } from '$lib/types';

export const mainNavigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const mobileNavigation: NavigationItem[] = [
  ...mainNavigation,
  { label: 'Categories', href: '/categories' },
];