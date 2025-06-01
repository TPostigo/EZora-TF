// src/api/firebaseService.js
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../firebaseConfig';

// Registrar un nuevo usuario
export const registrarUsuario = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardar info del usuario
    await setDoc(doc(db, 'usuarios', user.uid), { email });

    // 🛒 Crear cesta vacía
    await setDoc(doc(db, 'cestas', user.uid), { productos: [] });

    return user;
  } catch (error) {
    console.error('Error en el registro:', error);
    throw error;
  }
};

// Iniciar sesión
export const loginUsuario = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Obtener información adicional del usuario desde Firestore
    const userDoc = await getDoc(doc(db, 'usuarios', user.uid));
    if (!userDoc.exists()) throw new Error('Datos de usuario no encontrados');

    return {
      uid: user.uid,
      email: user.email,
      ...userDoc.data()
    };
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};
