// ccchouston/src/lib/stores/user.ts
import { writable } from 'svelte/store';

export const user = writable<{
  id: string;
  email: string;
  // Add other properties as needed
} | null>(null);

user.subscribe((value) => {
  console.log('User store value:', value);
});