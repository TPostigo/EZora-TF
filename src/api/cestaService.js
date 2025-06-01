import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { getAuth } from 'firebase/auth';

// Añadir un producto a la cesta
export const añadirProductoACesta = async (producto) => {
  const user = getAuth().currentUser;
  if (!user) return;

  const cestaRef = doc(db, 'cestas', user.uid);

  try {
    await updateDoc(cestaRef, {
      productos: arrayUnion(producto)
    });
  } catch (error) {
    // Si no existe, se crea
    await setDoc(cestaRef, { productos: [producto] });
  }
};

// Obtener la cesta de un usuario (por su UID)
export const obtenerCestaPorUsuario = async (uid) => {
  const cestaRef = doc(db, 'cestas', uid);
  const docSnap = await getDoc(cestaRef);
  if (docSnap.exists()) {
    return docSnap.data().productos || [];
  }
  return [];
};

// Eliminar un producto específico de la cesta
export const eliminarProductoDeCesta = async (uid, producto) => {
  const cestaRef = doc(db, 'cestas', uid);
  await updateDoc(cestaRef, {
    productos: arrayRemove(producto)
  });
};
