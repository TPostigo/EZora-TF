// src/api/skillShopApi.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const obtenerProductos = async () => {
  const productosRef = collection(db, 'productos');
  const querySnapshot = await getDocs(productosRef);

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
