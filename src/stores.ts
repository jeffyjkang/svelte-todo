import { Writable, writable } from 'svelte/store';

export type ItemType = {
  id: string;
  text: string;
  completed: boolean;
};

export const items: Writable<ItemType[]> = writable([
/*
  {
    id: '1',
    text: 'Take out trash',
    completed: false
  },
  {
    id: '2',
    text: 'Do dishes',
    completed: true
  }
*/
]);

