import { db } from './firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore'; //metode de la firebase

interface Item { // se schimba numele item cu interfata pe care o vreau eu
  name: string; 
  // add more fields if needed
}

// Add item
export const addItem = async (item: Item) => { //item va fi obiectul meu
  const docRef = await addDoc(collection(db, 'items'), item); //items se inlocuiexste cu numele tabelului meu
  return docRef.id;
};

// Get all items
export const getItems = async (): Promise<(Item & { id: string })[]> => { //promisiunile se folosesc cu await, deoarece functia nu da rezultatele instant si trebuie asteptat dupa ea
  const snapshot = await getDocs(collection(db, 'items')); // console.log(snapshot); pt a vedea ce se pune in ea
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Item), 
  }));
};

// Delete item
export const deleteItem = async (id: string) => {
  await deleteDoc(doc(db, 'items', id));
};

// Update item
export const updateItem = async (id: string, data: Partial<Item>) => {
  await updateDoc(doc(db, 'items', id), data);
};