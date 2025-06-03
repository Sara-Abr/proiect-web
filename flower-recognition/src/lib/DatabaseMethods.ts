
import { db } from './firebaseConfig';
import {
  ref,
  push,
  get,
  remove,
  update,
  child,
} from 'firebase/database'; // Use Realtime Database methods

interface Item {
  name: string;
  // add more fields if needed
}

// Add item
export const addItem = async (item: Item) => {
  const itemsRef = ref(db, 'items');
  const newItemRef = await push(itemsRef, item);
  return newItemRef.key;
};

// Get all items
export const getItems = async (): Promise<(Item & { id: string })[]> => {
  const snapshot = await get(ref(db, 'items'));
  const data = snapshot.val();
  if (!data) return [];
  return Object.entries(data).map(([id, value]) => ({
    id,
    ...(value as Item),
  }));
};

// Delete item
export const deleteItem = async (id: string) => {
  await remove(ref(db, `items/${id}`));
};

// Update item
export const updateItem = async (id: string, data: Partial<Item>) => {
  await update(ref(db, `items/${id}`), data);
};